"use client";

import { useEffect, useRef } from "react";

// ── Shaders ────────────────────────────────────────────────────────────────────

const VERT = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// Single-layer smooth value noise — no fractal octaves, no turbulence.
// Large-scale features, very slow drift, low contrast = soft fluid wash.
const FRAG = `
precision mediump float;

uniform float u_time;
uniform vec2  u_resolution;

float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 17.5);
  return fract(p.x * p.y);
}

// Bilinear smooth value noise — single layer only
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);          // smoothstep curve
  return mix(
    mix(hash(i),                hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  // Correct for aspect ratio so blobs are round, not stretched
  float aspect = u_resolution.x / u_resolution.y;
  vec2  p      = vec2(uv.x * aspect, uv.y);

  // Extremely slow time
  float t = u_time * 0.035;

  // Two large-scale noise fields moving in gently different directions.
  // Scale ≈ 1–1.5 → very big, calm regions (no fine detail).
  float n1 = noise(p * 1.3 + vec2( t * 0.14,  t * 0.09));
  float n2 = noise(p * 0.9 + vec2(-t * 0.07,  t * 0.11));
  float n3 = noise(p * 0.7 + vec2( t * 0.05, -t * 0.08));

  // Blend noise fields, then compress the range dramatically
  // → very low contrast, no harsh edges
  float blend = mix(n1, n2, 0.45);
  blend = smoothstep(0.36, 0.64, blend);       // narrow range = gentle

  // Palette: cream ↔ warm yellow ↔ soft sage  (close siblings, not opposites)
  vec3 cream  = vec3(0.97, 0.98, 0.91);
  vec3 yellow = vec3(1.00, 0.97, 0.67);
  vec3 sage   = vec3(0.76, 0.92, 0.53);

  vec3 col = mix(cream, yellow, blend);
  // Third colour influence is kept subtle (max 22% mix)
  col = mix(col, sage, n3 * 0.22);

  gl_FragColor = vec4(col, 1.0);
}
`;

// ── Component ──────────────────────────────────────────────────────────────────

export default function GodRays() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    function compile(src: string, type: number) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(VERT, gl.VERTEX_SHADER));
    gl.attachShader(prog, compile(FRAG, gl.FRAGMENT_SHADER));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Full-screen quad via triangle strip
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1,  1, -1,  -1, 1,  1, 1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes  = gl.getUniformLocation(prog, "u_resolution");

    let raf: number;
    const t0 = performance.now();

    function resize() {
      const w = canvas!.clientWidth;
      const h = canvas!.clientHeight;
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width  = w;
        canvas!.height = h;
        gl!.viewport(0, 0, w, h);
      }
    }

    function render() {
      resize();
      gl!.uniform1f(uTime, (performance.now() - t0) / 1000);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    }

    render();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
