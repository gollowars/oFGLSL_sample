uniform vec2  resolution;
uniform float  time;

void main(){
  // vec2 p = gl_FragCoord.xy/resolution;

  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x,resolution.y);

  float locus = 0.5;
  float locusSize = 1.0;
  float speed = 10.0;
  float dista = 1.13;
  float circlsMaxSize = 0.05;
  vec3 destColor = vec3(0.0);

  for(float i = 0.0; i < 15.0; i++){
    float j = i + 1.0;
    vec2 q = p + vec2(cos(time*speed + j*dista)*(locus*cos(time*locusSize)),sin(time*speed  + j*dista)*(locus*sin(time*locusSize)));
    float l = (circlsMaxSize*(abs(cos(time))))/length(q);


    destColor += vec3(l-0.01,l-0.015,l-0.01);
  }


  gl_FragColor = vec4(vec3(destColor),1.0);
}
