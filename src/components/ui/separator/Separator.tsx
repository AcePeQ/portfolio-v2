type SeparatorProps = {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
};

export default function Separator({
  width = 170,
  height = 12,
}: SeparatorProps) {
  return (
    <div aria-hidden className="mt-26 mb-10 flex items-center justify-center text-white-dark-hover">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" shapeRendering="crispEdges">
          <path fillOpacity="0.0039" d="M113 0h1v1h-1zM112 1h1v1h-1zM111 2h1v1h-1zM110 3h1v1h-1zM109 4h1v1h-1zM108 5h1v1h-1zM104 10h1v1h-1z" />
          <path fillOpacity="0.0078" d="M107 6h1v1h-1z" />
          <path fillOpacity="0.0118" d="M106 7h1v1h-1zM105 8h1v1h-1zM104 9h1v1h-1z" />
          <path fillOpacity="0.0157" d="M95 11h1v1h-1z" />
          <path fillOpacity="0.0196" d="M94 10h1v1h-1z" />
          <path fillOpacity="0.0235" d="M103 0h1v1h-1zM102 1h1v1h-1zM101 2h1v1h-1zM100 3h1v1h-1zM99 4h1v1h-1z" />
          <path fillOpacity="0.0314" d="M98 5h1v1h-1z" />
          <path fillOpacity="0.0353" d="M97 6h1v1h-1z" />
          <path fillOpacity="0.0392" d="M96 7h1v1h-1zM95 8h1v1h-1zM94 9h1v1h-1z" />
          <path fillOpacity="0.0588" d="M93 0h1v1h-1zM92 1h1v1h-1zM91 2h1v1h-1zM67 11h1v1h-1z" />
          <path fillOpacity="0.0627" d="M59 0h1v1h-1zM90 3h1v1h-1zM68 10h1v1h-1z" />
          <path fillOpacity="0.0667" d="M60 1h1v1h-1zM89 4h1v1h-1z" />
          <path fillOpacity="0.0706" d="M88 5h1v1h-1z" />
          <path fillOpacity="0.0745" d="M61 2h1v1h-1zM87 6h1v1h-1zM85 11h1v1h-1z" />
          <path fillOpacity="0.0784" d="M62 3h1v1h-1z" />
          <path fillOpacity="0.0824" d="M77 0h1v1h-1zM76 1h1v1h-1zM63 4h1v1h-1zM64 5h1v1h-1zM83 9h1v1h-1zM84 10h1v1h-1z" />
          <path fillOpacity="0.0863" d="M65 6h1v1h-1zM82 8h1v1h-1z" />
          <path fillOpacity="0.0902" d="M66 7h1v1h-1zM81 7h1v1h-1z" />
          <path fillOpacity="0.0941" d="M80 6h1v1h-1zM67 8h1v1h-1z" />
          <path fillOpacity="0.0980" d="M79 5h1v1h-1zM68 9h1v1h-1z" />
          <path fillOpacity="0.1020" d="M78 4h1v1h-1z" />
          <path fillOpacity="0.1059" d="M77 3h1v1h-1z" />
          <path fillOpacity="0.1137" d="M76 2h1v1h-1zM77 11h1v1h-1z" />
          <path fillOpacity="0.1176" d="M78 10h1v1h-1z" />
          <path fillOpacity="0.1216" d="M69 0h1v1h-1z" />
          <path fillOpacity="0.1255" d="M70 1h1v1h-1z" />
          <path fillOpacity="0.1294" d="M71 2h1v1h-1z" />
          <path fillOpacity="0.1333" d="M72 3h1v1h-1zM75 11h1v1h-1z" />
          <path fillOpacity="0.1373" d="M67 0h1v1h-1zM73 4h1v1h-1zM74 10h1v1h-1z" />
          <path fillOpacity="0.1451" d="M66 1h1v1h-1zM74 5h1v1h-1zM73 9h1v1h-1z" />
          <path fillOpacity="0.1490" d="M75 6h1v1h-1zM72 8h1v1h-1z" />
          <path fillOpacity="0.1529" d="M76 7h1v1h-1z" />
          <path fillOpacity="0.1569" d="M71 7h1v1h-1zM77 8h1v1h-1z" />
          <path fillOpacity="0.1608" d="M70 6h1v1h-1zM78 9h1v1h-1z" />
          <path fillOpacity="0.1647" d="M69 5h1v1h-1z" />
          <path fillOpacity="0.1686" d="M68 4h1v1h-1z" />
          <path fillOpacity="0.1765" d="M67 3h1v1h-1z" />
          <path fillOpacity="0.1843" d="M66 2h1v1h-1z" />
          <path fillOpacity="0.1922" d="M79 0h1v1h-1z" />
          <path fillOpacity="0.2000" d="M80 1h1v1h-1z" />
          <path fillOpacity="0.2039" d="M81 2h1v1h-1zM65 11h1v1h-1z" />
          <path fillOpacity="0.2118" d="M82 3h1v1h-1z" />
          <path fillOpacity="0.2196" d="M57 0h1v1h-1zM83 4h1v1h-1zM64 10h1v1h-1z" />
          <path fillOpacity="0.2275" d="M56 1h1v1h-1zM84 5h1v1h-1zM63 9h1v1h-1z" />
          <path fillOpacity="0.2314" d="M85 6h1v1h-1zM62 8h1v1h-1zM87 11h1v1h-1z" />
          <path fillOpacity="0.2353" d="M61 7h1v1h-1zM88 10h1v1h-1z" />
          <path fillOpacity="0.2392" d="M95 0h1v1h-1zM60 6h1v1h-1zM89 9h1v1h-1z" />
          <path fillOpacity="0.2431" d="M96 1h1v1h-1zM59 5h1v1h-1z" />
          <path fillOpacity="0.2510" d="M58 4h1v1h-1zM90 8h1v1h-1z" />
          <path fillOpacity="0.2588" d="M57 3h1v1h-1zM91 7h1v1h-1z" />
          <path fillOpacity="0.2667" d="M56 2h1v1h-1zM92 6h1v1h-1z" />
          <path fillOpacity="0.2745" d="M93 5h1v1h-1z" />
          <path fillOpacity="0.2784" d="M94 4h1v1h-1z" />
          <path fillOpacity="0.2824" d="M95 3h1v1h-1z" />
          <path fillOpacity="0.2863" d="M96 2h1v1h-1z" />
          <path fillOpacity="0.3137" d="M86 7h1v1h-1z" />
          <path fillOpacity="0.3294" d="M97 11h1v1h-1z" />
          <path fillOpacity="0.3333" d="M105 0h1v1h-1zM98 10h1v1h-1z" />
          <path fillOpacity="0.3412" d="M106 1h1v1h-1zM99 9h1v1h-1z" />
          <path fillOpacity="0.3490" d="M100 8h1v1h-1z" />
          <path fillOpacity="0.3569" d="M101 7h1v1h-1z" />
          <path fillOpacity="0.3647" d="M102 6h1v1h-1z" />
          <path fillOpacity="0.3725" d="M103 5h1v1h-1z" />
          <path fillOpacity="0.3765" d="M47 5h1v1h-1zM122 5h1v1h-1z" />
          <path fillOpacity="0.3843" d="M104 4h1v1h-1z" />
          <path fillOpacity="0.3922" d="M105 3h1v1h-1z" />
          <path fillOpacity="0.4000" d="M106 2h1v1h-1zM0 5h47v1h-47zM123 5h47v1h-47z" />
          <path fillOpacity="0.4392" d="M47 8h1v1h-1zM122 8h1v1h-1zM107 11h1v1h-1z" />
          <path fillOpacity="0.4471" d="M108 10h1v1h-1z" />
          <path fillOpacity="0.4549" d="M115 0h1v1h-1zM109 9h1v1h-1z" />
          <path fillOpacity="0.4627" d="M116 1h1v1h-1z" />
          <path fillOpacity="0.4667" d="M0 8h47v1h-47zM110 8h1v1h-1zM123 8h47v1h-47z" />
          <path fillOpacity="0.4784" d="M111 7h1v1h-1z" />
          <path fillOpacity="0.4863" d="M112 6h1v1h-1z" />
          <path fillOpacity="0.4941" d="M113 5h1v1h-1z" />
          <path fillOpacity="0.5059" d="M114 4h1v1h-1z" />
          <path fillOpacity="0.5137" d="M115 3h1v1h-1z" />
          <path fillOpacity="0.5216" d="M116 2h1v1h-1z" />
          <path fillOpacity="0.5412" d="M106 11h1v1h-1z" />
          <path fillOpacity="0.5569" d="M105 10h1v1h-1z" />
          <path fillOpacity="0.5686" d="M114 0h1v1h-1z" />
          <path fillOpacity="0.5765" d="M113 1h1v1h-1z" />
          <path fillOpacity="0.5843" d="M112 2h1v1h-1z" />
          <path fillOpacity="0.5922" d="M111 3h1v1h-1z" />
          <path fillOpacity="0.6000" d="M110 4h1v1h-1z" />
          <path fillOpacity="0.6078" d="M109 5h1v1h-1z" />
          <path fillOpacity="0.6157" d="M108 6h1v1h-1z" />
          <path fillOpacity="0.6196" d="M107 7h1v1h-1z" />
          <path fillOpacity="0.6275" d="M106 8h1v1h-1z" />
          <path fillOpacity="0.6353" d="M105 9h1v1h-1z" />
          <path fillOpacity="0.6431" d="M96 11h1v1h-1z" />
          <path fillOpacity="0.6588" d="M104 0h1v1h-1z" />
          <path fillOpacity="0.6706" d="M95 10h1v1h-1z" />
          <path fillOpacity="0.6824" d="M103 1h1v1h-1z" />
          <path fillOpacity="0.6902" d="M102 2h1v1h-1z" />
          <path fillOpacity="0.6980" d="M101 3h1v1h-1z" />
          <path fillOpacity="0.7059" d="M100 4h1v1h-1z" />
          <path fillOpacity="0.7176" d="M99 5h1v1h-1zM66 11h1v1h-1z" />
          <path fillOpacity="0.7216" d="M98 6h1v1h-1z" />
          <path fillOpacity="0.7255" d="M94 0h1v1h-1zM97 7h1v1h-1z" />
          <path fillOpacity="0.7333" d="M96 8h1v1h-1z" />
          <path fillOpacity="0.7373" d="M58 0h1v1h-1zM76 11h1v1h-1z" />
          <path fillOpacity="0.7412" d="M78 0h1v1h-1zM95 9h1v1h-1z" />
          <path fillOpacity="0.7529" d="M86 11h1v1h-1z" />
          <path fillOpacity="0.7569" d="M68 0h1v1h-1z" />
          <path fillOpacity="0.7804" d="M93 1h1v1h-1z" />
          <path fillOpacity="0.7882" d="M92 2h1v1h-1zM67 10h1v1h-1z" />
          <path fillOpacity="0.7961" d="M91 3h1v1h-1z" />
          <path fillOpacity="0.8000" d="M59 1h1v1h-1zM90 4h1v1h-1z" />
          <path fillOpacity="0.8039" d="M89 5h1v1h-1z" />
          <path fillOpacity="0.8078" d="M60 2h1v1h-1zM88 6h1v1h-1z" />
          <path fillOpacity="0.8118" d="M61 3h1v1h-1zM87 7h1v1h-1zM85 10h1v1h-1z" />
          <path fillOpacity="0.8157" d="M62 4h1v1h-1z" />
          <path fillOpacity="0.8235" d="M77 1h1v1h-1zM63 5h1v1h-1zM84 9h1v1h-1z" />
          <path fillOpacity="0.8314" d="M64 6h1v1h-1zM83 8h1v1h-1z" />
          <path fillOpacity="0.8353" d="M65 7h1v1h-1zM82 7h1v1h-1z" />
          <path fillOpacity="0.8392" d="M81 6h1v1h-1zM66 8h1v1h-1z" />
          <path fillOpacity="0.8431" d="M80 5h1v1h-1zM67 9h1v1h-1z" />
          <path fillOpacity="0.8471" d="M79 4h1v1h-1z" />
          <path fillOpacity="0.8510" d="M78 3h1v1h-1z" />
          <path fillOpacity="0.8627" d="M77 2h1v1h-1z" />
          <path fillOpacity="0.8667" d="M77 10h1v1h-1z" />
          <path fillOpacity="0.8745" d="M69 1h1v1h-1z" />
          <path fillOpacity="0.8784" d="M70 2h1v1h-1z" />
          <path fillOpacity="0.8824" d="M71 3h1v1h-1z" />
          <path fillOpacity="0.8863" d="M72 4h1v1h-1zM75 10h1v1h-1z" />
          <path fillOpacity="0.8902" d="M67 1h1v1h-1zM73 5h1v1h-1zM74 9h1v1h-1z" />
          <path fillOpacity="0.8941" d="M74 6h1v1h-1zM73 8h1v1h-1z" />
          <path fillOpacity="0.8980" d="M72 7h1v1h-1zM75 7h1v1h-1z" />
          <path fillOpacity="0.9020" d="M76 8h1v1h-1z" />
          <path fillOpacity="0.9059" d="M71 6h1v1h-1zM77 9h1v1h-1z" />
          <path fillOpacity="0.9098" d="M70 5h1v1h-1z" />
          <path fillOpacity="0.9137" d="M69 4h1v1h-1z" />
          <path fillOpacity="0.9176" d="M67 2h1v1h-1zM68 3h1v1h-1z" />
          <path fillOpacity="0.9294" d="M79 1h1v1h-1z" />
          <path fillOpacity="0.9373" d="M80 2h1v1h-1z" />
          <path fillOpacity="0.9412" d="M57 1h1v1h-1zM81 3h1v1h-1zM82 4h1v1h-1zM83 5h1v1h-1zM47 6h1v1h-1zM122 6h1v1h-1zM47 7h1v1h-1zM122 7h1v1h-1zM64 9h1v1h-1zM65 10h1v1h-1z" />
          <path fillOpacity="0.9451" d="M84 6h1v1h-1zM63 8h1v1h-1z" />
          <path fillOpacity="0.9490" d="M62 7h1v1h-1zM85 7h1v1h-1zM87 10h1v1h-1z" />
          <path fillOpacity="0.9529" d="M61 6h1v1h-1zM88 9h1v1h-1z" />
          <path fillOpacity="0.9569" d="M95 1h1v1h-1zM60 5h1v1h-1z" />
          <path fillOpacity="0.9608" d="M57 2h1v1h-1zM58 3h1v1h-1zM59 4h1v1h-1zM92 5h1v1h-1zM91 6h1v1h-1zM90 7h1v1h-1zM89 8h1v1h-1z" />
          <path fillOpacity="0.9647" d="M93 4h1v1h-1z" />
          <path fillOpacity="0.9686" d="M94 3h1v1h-1z" />
          <path fillOpacity="0.9725" d="M95 2h1v1h-1z" />
          <path fillOpacity="0.9843" d="M97 10h1v1h-1z" />
          <path fillOpacity="0.9882" d="M105 1h1v1h-1zM102 5h1v1h-1zM101 6h1v1h-1zM100 7h1v1h-1zM99 8h1v1h-1zM98 9h1v1h-1z" />
          <path fillOpacity="0.9922" d="M103 4h1v1h-1z" />
          <path fillOpacity="0.9961" d="M105 2h1v1h-1zM104 3h1v1h-1z" />
          <path d="M58 1h1v1h-1zM68 1h1v1h-1zM78 1h1v1h-1zM94 1h1v1h-1zM104 1h1v1h-1zM114 1h2v1h-2zM58 2h2v1h-2zM68 2h2v1h-2zM78 2h2v1h-2zM93 2h2v1h-2zM103 2h2v1h-2zM113 2h3v1h-3zM59 3h2v1h-2zM69 3h2v1h-2zM79 3h2v1h-2zM92 3h2v1h-2zM102 3h2v1h-2zM112 3h3v1h-3zM60 4h2v1h-2zM70 4h2v1h-2zM80 4h2v1h-2zM91 4h2v1h-2zM101 4h2v1h-2zM111 4h3v1h-3zM61 5h2v1h-2zM71 5h2v1h-2zM81 5h2v1h-2zM90 5h2v1h-2zM100 5h2v1h-2zM110 5h3v1h-3zM0 6h47v1h-47zM62 6h2v1h-2zM72 6h2v1h-2zM82 6h2v1h-2zM89 6h2v1h-2zM99 6h2v1h-2zM109 6h3v1h-3zM123 6h47v1h-47zM0 7h47v1h-47zM63 7h2v1h-2zM73 7h2v1h-2zM83 7h2v1h-2zM88 7h2v1h-2zM98 7h2v1h-2zM108 7h3v1h-3zM123 7h47v1h-47zM64 8h2v1h-2zM74 8h2v1h-2zM84 8h5v1h-5zM97 8h2v1h-2zM107 8h3v1h-3zM65 9h2v1h-2zM75 9h2v1h-2zM85 9h3v1h-3zM96 9h2v1h-2zM106 9h3v1h-3zM66 10h1v1h-1zM76 10h1v1h-1zM86 10h1v1h-1zM96 10h1v1h-1zM106 10h2v1h-2z" />
        </g>
      </svg>
    </div>

  );
}
