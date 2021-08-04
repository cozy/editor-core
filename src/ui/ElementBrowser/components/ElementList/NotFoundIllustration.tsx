import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 120px;
  height: 111px;
  margin-top: 48px;
`;

export default function NotFoundIllustration(): JSX.Element {
  return (
    <ImageContainer>
      <svg
        width="120"
        height="111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path fill="#fff" fillOpacity=".01" d="M0 0h120v110.365H0z" />
          <path
            opacity=".3"
            d="M60.985 110.336c-.539.017-1.078.029-1.616.035a1.359 1.359 0 01-1.367-1.36 1.361 1.361 0 011.314-1.372h.041a50.876 50.876 0 0010.276-1.105 1.367 1.367 0 01.568 2.674 54.422 54.422 0 01-9.216 1.128zM52 109.877c-.075 0-.156 0-.237-.012a52.688 52.688 0 01-10.583-2.61 1.368 1.368 0 01.92-2.575c3.245 1.169 6.616 2 10.034 2.471.747.104 1.268.79 1.164 1.54A1.36 1.36 0 0152 109.877zM77.088 107.162a1.364 1.364 0 01-1.326-.895 1.366 1.366 0 01.805-1.755 50.423 50.423 0 009.274-4.575 1.358 1.358 0 011.877.43c.4.64.208 1.482-.429 1.884a53.25 53.25 0 01-9.772 4.824 1.26 1.26 0 01-.429.087zM34.9 104.32a1.359 1.359 0 01-.683-.157 53.29 53.29 0 01-9.042-6.092 1.369 1.369 0 01-.18-1.924 1.357 1.357 0 011.918-.18 50.483 50.483 0 008.578 5.778c.667.354.916 1.18.562 1.848a1.337 1.337 0 01-1.152.727zM20.732 93.23a1.372 1.372 0 01-1.06-.448 53.223 53.223 0 01-6.436-8.818 1.37 1.37 0 01.487-1.872 1.36 1.36 0 011.865.489 50.724 50.724 0 006.105 8.364 1.366 1.366 0 01-.098 1.93c-.25.226-.556.343-.863.354zM104.093 84.196a1.367 1.367 0 01-1.228-2.046 50.41 50.41 0 004.183-9.48 1.358 1.358 0 011.714-.878 1.365 1.365 0 01.875 1.72 53.17 53.17 0 01-4.414 9.993 1.34 1.34 0 01-1.13.691zM11.18 77.965a1.365 1.365 0 01-1.31-.854 52.827 52.827 0 01-3.029-10.498 1.362 1.362 0 112.682-.483 50.732 50.732 0 002.873 9.958 1.363 1.363 0 01-1.216 1.877zM110.17 67.218a1.362 1.362 0 01-1.39-1.593c.579-3.395.805-6.876.683-10.347l-.006-.116a1.36 1.36 0 011.315-1.412 1.359 1.359 0 011.408 1.32l.006.115a54.054 54.054 0 01-.724 10.905 1.36 1.36 0 01-1.292 1.128zM7.426 60.3c-.753.03-1.384-.534-1.407-1.29v-.058a53.82 53.82 0 01.712-10.846 1.368 1.368 0 011.57-1.122c.741.128 1.24.83 1.118 1.575a51.307 51.307 0 00-.678 10.288c.029.762-.562 1.425-1.315 1.453zM110.06 49.076a1.363 1.363 0 01-1.385-1.122 50.567 50.567 0 00-2.884-9.95c-.284-.698.052-1.5.747-1.785a1.365 1.365 0 011.778.75 53.085 53.085 0 013.041 10.497 1.37 1.37 0 01-1.094 1.593l-.203.017zM9.888 42.462a1.452 1.452 0 01-.47-.065 1.365 1.365 0 01-.874-1.72 53.157 53.157 0 014.402-9.998 1.362 1.362 0 011.86-.511c.655.372.88 1.209.51 1.866a50.68 50.68 0 00-4.177 9.486 1.37 1.37 0 01-1.251.941zM103.815 32.179a1.355 1.355 0 01-1.222-.674 50.958 50.958 0 00-6.117-8.359 1.366 1.366 0 01.099-1.93 1.355 1.355 0 011.923.099 53.449 53.449 0 016.447 8.806 1.37 1.37 0 01-.487 1.872 1.432 1.432 0 01-.643.186zM18.31 26.529a1.372 1.372 0 01-1.124-2.209 53.551 53.551 0 017.537-7.888 1.363 1.363 0 011.923.157 1.375 1.375 0 01-.156 1.93 51.072 51.072 0 00-7.154 7.487 1.343 1.343 0 01-1.025.523zM92.172 18.444a1.352 1.352 0 01-.915-.314 50.861 50.861 0 00-8.59-5.772 1.368 1.368 0 01-.568-1.849 1.364 1.364 0 011.842-.57 53.153 53.153 0 019.048 6.08c.58.483.66 1.343.18 1.925a1.366 1.366 0 01-.997.5zM31.64 14.433a1.368 1.368 0 01-.776-2.523 53.107 53.107 0 019.771-4.836 1.359 1.359 0 011.75.808c.26.71-.099 1.494-.805 1.755a50.203 50.203 0 00-9.269 4.587c-.208.133-.44.203-.672.209zM76.555 9.51a1.257 1.257 0 01-.504-.082A50.06 50.06 0 0066.013 6.97a1.364 1.364 0 01-1.165-1.54 1.364 1.364 0 011.535-1.168 52.623 52.623 0 0110.584 2.592 1.369 1.369 0 01-.412 2.657zM48.287 7.65a1.367 1.367 0 01-.33-2.703 54.261 54.261 0 0110.827-1.18 1.367 1.367 0 011.372 1.36 1.367 1.367 0 01-1.314 1.377H58.8A50.85 50.85 0 0048.525 7.62c-.081.018-.162.024-.238.03z"
            fill="#B3BAC5"
          />
          <path
            opacity=".3"
            d="M110.523 19.873a.304.304 0 01-.226-.325l.035-.262c.029-.168.064-.348.11-.534a4.423 4.423 0 01.95-1.796c.458-.53 1.118-.971 1.97-1.314l1.436-.587c.858-.343 1.385-.913 1.593-1.697a2.48 2.48 0 00.07-.878 1.998 1.998 0 00-.273-.849c-.156-.261-.37-.5-.654-.709a3.07 3.07 0 00-1.049-.477c-.451-.116-.851-.133-1.21-.052a2.56 2.56 0 00-.956.43c-.278.204-.51.465-.695.78-.191.313-.33.65-.423.999-.029.104-.052.21-.07.302a.459.459 0 01-.59.355l-2.219-.68a.464.464 0 01-.33-.483c.006-.07.017-.14.029-.21.035-.197.075-.383.121-.569.174-.668.47-1.29.887-1.866a5.14 5.14 0 011.546-1.412c.614-.366 1.31-.605 2.097-.72.788-.117 1.645-.047 2.578.197.967.256 1.778.622 2.433 1.098.66.477 1.176 1.012 1.552 1.599.377.593.614 1.22.707 1.889.093.668.058 1.32-.11 1.953-.261 1-.712 1.796-1.344 2.389a6.773 6.773 0 01-2.288 1.39l-1.211.458c-.341.11-.851.338-1.274.803-.041.046-.214.238-.388.534-.128.221-.22.436-.284.622a.303.303 0 01-.365.192l-2.155-.57zm-1.772 3.412c.145-.552.457-.97.944-1.26a1.942 1.942 0 011.552-.222c.551.146.968.465 1.257.96.29.493.359 1.017.215 1.569a1.966 1.966 0 01-.956 1.25 2.005 2.005 0 01-1.558.203 1.957 1.957 0 01-1.246-.942 1.98 1.98 0 01-.208-1.558zM10.722 12.393a.301.301 0 01-.203-.338l.053-.261c.04-.169.086-.343.15-.523a4.334 4.334 0 011.072-1.727c.492-.5 1.176-.889 2.056-1.18l1.472-.488c.874-.285 1.442-.814 1.703-1.587.092-.279.139-.57.127-.872a2.052 2.052 0 00-.214-.866 2.285 2.285 0 00-.609-.75c-.266-.226-.608-.406-1.013-.546-.44-.151-.846-.192-1.205-.134a2.518 2.518 0 00-1.726 1.099 3.583 3.583 0 00-.585 1.267.461.461 0 01-.615.314L9.02 4.976a.467.467 0 01-.295-.506c.011-.07.029-.14.046-.21a5.65 5.65 0 01.162-.557A5.505 5.505 0 019.946 1.9 5.246 5.246 0 0111.579.593a5.545 5.545 0 012.138-.576c.793-.058 1.645.064 2.554.372.945.32 1.732.739 2.358 1.262.626.523 1.106 1.087 1.442 1.703.336.616.533 1.255.58 1.93a4.97 4.97 0 01-.244 1.941c-.33.982-.828 1.744-1.506 2.29a6.844 6.844 0 01-2.375 1.233l-1.24.372a2.94 2.94 0 00-1.326.715c-.046.046-.232.226-.423.505-.145.215-.249.419-.324.599a.3.3 0 01-.377.168l-2.114-.714zm-1.998 3.284a2 2 0 011.025-1.198 1.957 1.957 0 011.564-.116c.539.18.933.529 1.188 1.04.254.512.29 1.041.11 1.582-.18.54-.528.935-1.037 1.18a2.019 2.019 0 01-1.57.098 1.96 1.96 0 01-1.182-1.029 1.99 1.99 0 01-.098-1.557zM7.177 104.849a.298.298 0 01-.37-.134c-.041-.076-.082-.157-.122-.238a8.207 8.207 0 01-.215-.5 4.405 4.405 0 01-.249-2.017c.076-.698.36-1.436.863-2.215l.84-1.308c.504-.773.614-1.546.33-2.307a2.6 2.6 0 00-.446-.762 2.019 2.019 0 00-.706-.54 2.421 2.421 0 00-.944-.204 3.05 3.05 0 00-1.13.215c-.434.163-.776.378-1.025.657-.25.273-.423.576-.533.901-.11.326-.15.674-.128 1.04.024.367.099.721.226 1.064.04.105.076.198.116.285a.466.466 0 01-.278.634l-2.201.72a.455.455 0 01-.545-.209c-.034-.064-.063-.128-.098-.192a5.595 5.595 0 01-.568-2.575 5.09 5.09 0 01.458-2.046c.29-.65.724-1.25 1.303-1.796.58-.546 1.32-.988 2.225-1.32.938-.348 1.807-.517 2.618-.505.81.012 1.54.151 2.19.413a4.62 4.62 0 011.656 1.139c.458.494.8 1.046 1.025 1.662.36.971.446 1.884.267 2.732-.18.85-.539 1.669-1.078 2.46l-.73 1.075c-.214.29-.503.767-.585 1.389-.005.064-.04.319-.011.657.023.255.07.482.127.668a.309.309 0 01-.19.372l-2.092.785zm.504 3.813a2.026 2.026 0 01.052-1.581 1.958 1.958 0 011.147-1.076 1.986 1.986 0 011.576.064c.521.239.88.628 1.077 1.163a1.947 1.947 0 01-.07 1.569 2.028 2.028 0 01-1.158 1.064 1.977 1.977 0 01-1.564-.052 1.96 1.96 0 01-1.06-1.151z"
            fill="#C1C7D0"
          />
          <path
            d="M86.519 77.651l-4.142-4.028-5.578 5.784 4.141 4.028a7.812 7.812 0 012.15 3.772 7.858 7.858 0 002.148 3.773l16.816 16.333a6.405 6.405 0 009.077-.145 6.46 6.46 0 00-.144-9.108L94.171 81.726a7.786 7.786 0 00-3.83-2.034 7.9 7.9 0 01-3.822-2.04z"
            fill="#CFD4DB"
          />
          <path
            d="M90.18 79.64a7.756 7.756 0 01-3.656-1.995l-1.262-1.226a4 4 0 00-5.671.093 4.032 4.032 0 00.092 5.69l1.263 1.227a7.853 7.853 0 012.103 3.598 33.606 33.606 0 003.858-3.435 33.629 33.629 0 003.273-3.953z"
            fill="#B3BAC5"
          />
          <path
            d="M59.056 90.677c-8.961.146-17.442-3.22-23.877-9.474-13.295-12.91-13.636-34.266-.77-47.606C40.64 27.14 49.01 23.501 57.966 23.35c8.961-.145 17.441 3.22 23.877 9.475 6.441 6.255 10.062 14.654 10.212 23.64.145 8.992-3.209 17.502-9.442 23.96-6.227 6.47-14.597 10.108-23.558 10.253zM58.1 31.388c-6.824.11-13.19 2.883-17.94 7.801-9.795 10.155-9.534 26.413.585 36.242 4.9 4.76 11.36 7.324 18.183 7.213 6.824-.11 13.19-2.883 17.94-7.8 4.744-4.918 7.299-11.399 7.189-18.246-.11-6.847-2.873-13.236-7.774-18.002-4.906-4.755-11.36-7.318-18.183-7.208z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M68.886 49.535l-3.093-3.051a1.158 1.158 0 00-1.64.017l-5.67 5.796-5.776-5.691a1.158 1.158 0 00-1.64.017l-3.04 3.104c-.446.46-.44 1.192.017 1.645l5.775 5.69-5.67 5.796c-.447.46-.44 1.192.017 1.645l3.093 3.052a1.158 1.158 0 001.64-.018l5.67-5.795 5.775 5.69a1.158 1.158 0 001.64-.017l3.04-3.104c.447-.459.441-1.191-.017-1.645l-5.775-5.69 5.671-5.795c.446-.46.44-1.198-.017-1.645z"
            fill="#C1C7D0"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="34.792"
            y1="80.822"
            x2="82.401"
            y2="33.377"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".557" stopColor="#C1C7D0" />
            <stop offset=".966" stopColor="#E9EBEF" stopOpacity=".5" />
          </linearGradient>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h120v110.365H0z" />
          </clipPath>
        </defs>
      </svg>
    </ImageContainer>
  );
}
