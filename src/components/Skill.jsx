import JS from "../assets/icons/js-official-svgrepo-com.svg";
import TS from "../assets/icons/typescript-svgrepo-com.svg";
import PY from "../assets/icons//python-svgrepo-com.svg";
import reactjs from "../assets/icons/reactjs-svgrepo-com.svg";
import html from "../assets/icons/html-5-svgrepo-com.svg";
import css from "../assets/icons/css3-svgrepo-com.svg";
import nodejs from "../assets/icons/nodejs-icon-logo-svgrepo-com.svg";

import git from "../assets/icons/git-svgrepo-com.svg";
import figma from "../assets/icons/figma-svgrepo-com.svg";
import mongodb from "../assets/icons/mongodb-svgrepo-com.svg";
import api from "../assets/icons/api.png";
import linux from "../assets/icons/linux-svgrepo-com.svg";
import tailwindcss from "../assets/icons/tailwindcss-icon-svgrepo-com.svg";

function Skill() {
  return (
    <div class="space-y-3 pt-5">
      <dl class="flex flex-col gap-1 sm:flex-row">
        <dt class="min-w-40">
          <span class="block text-[1rem] text-gray-700 dark:text-gray-300">
            Design Tools:
          </span>
        </dt>
        <dd>
          <ul className="flex gap-3">
            <li className="me-1  after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={git} alt="JS" className="w-5 h-5" />
              <span className="pl-1">git</span>
            </li>
            <li className="me-1 fill-current  after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <svg
                width={20}
                height={20}
                className="fill-current dark:bg-white"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>github</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="black"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" />
                    </g>
                  </g>
                </g>
              </svg>
              <span className="pl-1">github</span>
            </li>
          </ul>
        </dd>
      </dl>

      <dl class="flex flex-col gap-1 sm:flex-row">
        <dt class="min-w-40">
          <span class="block text-[1rem] text-gray-700 dark:text-gray-300">
            Design Expertise:
          </span>
        </dt>
        <dd>
          <ul className="flex">
            <li className="me-1  after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <span className="pl-1 pt-0">Responsive Design</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={figma} alt="TS" className="w-5 h-5" />
              <span className="pl-1">figma</span>
            </li>
          </ul>
        </dd>
      </dl>

      <dl class="flex flex-col gap-1 sm:flex-row">
        <dt class="min-w-40">
          <span class="block text-[1rem] text-gray-700 dark:text-gray-300">
            Programming:
          </span>
        </dt>
        <dd>
          <ul>
            <li className="me-1  after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={JS} alt="JS" className="w-5 h-5 " />
              <span className="pl-1 pr-2">javascript</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={TS} alt="TS" className="w-5 h-5" />
              <span className="pl-1  pr-2">Typescript</span>
            </li>
            <li className="me-1 pr-2 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={PY} alt="TS" className="w-5 h-5" />
              <span className="pl-1 pr-2">Python</span>
            </li>
          </ul>
        </dd>
      </dl>

      <dl class="flex flex-col gap-1 sm:flex-row">
        <dt class="min-w-40">
          <span class="block text-[1rem] text-gray-700 dark:text-gray-300">
            Development:
          </span>
        </dt>
        <dd>
          <ul>
            <li className="me-1  after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={reactjs} alt="JS" className="w-5 h-5" />
              <span className="pl-1 pr-2">React js</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <svg
                className="fill-current text-blue-400"
                width="20"
                height="20"
                viewBox="0 0 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" />
                  // fill="#000000"
                </g>
              </svg>
              <span className="pl-1 pr-2">Next js</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={html} alt="TS" className="w-5 h-5" />
              <span className="pl-1 pr-2">html</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={css} alt="TS" className="w-5 h-5" />
              <span className="pl-1 pr-2">CSS</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={tailwindcss} alt="TS" className="w-5 h-5" />
              <span className="pl-1 pr-2">tailwind CSS</span>
            </li>
            <li className="me-1  after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={nodejs} alt="JS" className="w-5 h-5" />
              <span className="pl-1 pr-2">Node.js</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={api} alt="api" className="w-5 h-5" />
              <span className="pl-1 pr-2">restful api</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <svg
                width={20}
                className="text-amber-300 fill-current"
                height={20}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Express</title>
                <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
              </svg>
              <span className="pl-1 pr-2">Express.js</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img
                width={20}
                height={20}
                src="data:image/png;base64,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"
                alt="external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo"
              />
              <span className="pl-1 pr-2">netlify</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img
                width={20}
                height={20}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnElEQVR4nO2Va0hTYRjHX9+TZolo5IcuUHTRL5VKMy1KiiSXYc4urhKLrKbdrUwrCO0ioRlLt1KziwUZ5xwTRfCLZmWhFIHVcqZdlpYltJW2c+wyh0+cldDaCeemzsX5wQO7vDvP//fehpCAgICAgICAOTjzKfxdyJnAgoCDEVZgqHBZdxH+Lr7Z5htndZMb3ZMwxVYjmp3gfAI0uGGKeUJQLGCKecS9dyoBTLKpXPi+whSz13kEAFwIkmn9U4Ag2ZfOI0B/nWIW/nehsk7vYQ9ri5QryQbwCWCKkWKSvUuQzPe+VSEoVjHiBFCx3ocgmV4+CUsptnTkCSDuEDMPrREgaGbpiBQg6O6ofmefZEv6DT+sAjSMQXT35FGkfiFBMvn9hK9B5VpPy7RF4G7V0g1nkYyRoJhvBMnquEOMaXYrooHgn+6RKEAx15DVpAN2Lf5k9DyvAr/EU+CXmAFeigZwvdFpepj71Q8wTl4PfgkZMD1JCR6XNGbN3K5rwUvZAL47Mk3lmfeMC2A2hvvNjD1nYerBi+B+rcMisHtRO0xLUoLv9lOm3mOuvJf0xROJV00MDo9KCxZHVcyPkMwRiRJcLRxCxBLgq+CINbyfi1bGQmCMDERRcbzfB0VKwX/dDvBfvxvmSizHBK6VwaxNKTA7Ltn0OmR5tHlfsaQnRCzRhIRLOviebyGA5c06vsPniCKUrynrt0+fgOJVnaODY65Oqw0ou8Nj4AJ5rbtsaRhZ8gba9QZ4pzfAClpjt8Coc5p0ZBM0EDhb3TPQhlzwbfsPQcKBw/D2i8E+gZyWFmQPRJ6GtkWAC5+YfMQ+AflzFinbx9slgC5pPfEZteHXQ5+AW8YDGH2iHjzSbsG4lJswM/kyzN95EkKlW2DOhn2mxty24SS48BG2bqHsRiMqaAtCg8G83JrzCyJjeK9Gs2syNmlwDu0ZdQ8qaA1Dg0loVqmau5cXRcfCYmk8LN24EyL3poM0owBkRVVwqLYdYqp09oeXN+lRYdssNBSEVX6uPKr6DscbDbyV9uwH+CiabAuepQIXxes76ML7sWgoCS7T7ZPV6Y3/kpDd/wJu2aoBhFcBzn3Rhgo1YjRcpAPgRRUfSzff6+o5xiMRX9sJXjn9rMTpRiNWvKpHhW2hyJEElGmXLKnQ3V5d/VnLCSU97O49/PgbpDZ8hWXlHeCd29Rr+i+RP+/CuS+aiXMaGuW/XeXQ0AICAgIC/zU/AYP6b4G7PH7cAAAAAElFTkSuQmCC"
                alt="docker"
              />
              <span className="pl-1 pr-2">docker</span>
            </li>
            <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={mongodb} alt="TS" className="w-5 h-5" />
              <span className="pl-1 pr-2">mongodb</span>
            </li>
            <li className="me-1  inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
              <img src={linux} alt="TS" className="w-5 h-5" />
              <span className="pl-1 pr-2">Linux</span>
            </li>
          </ul>
        </dd>
      </dl>

      <dl class="flex flex-col gap-1 sm:flex-row">
        <dt class="min-w-40">
          <span class="block text-[1rem] text-gray-700 dark:text-gray-300">
            Soft Skills:
          </span>
        </dt>
        <dd>
          <ul>
            <li class="me-1 inline-flex items-center text-sm text-gray-800 after:content-[','] dark:text-neutral-200">
              Strong communication
            </li>
            <li class="me-1 inline-flex items-center text-sm text-gray-800 after:content-[','] dark:text-neutral-200">
              Problem-solving
            </li>
            <li class="me-1 inline-flex items-center text-sm text-gray-800 after:content-[','] dark:text-neutral-200">
              Attention to detail
            </li>
          </ul>
        </dd>
      </dl>
    </div>
    // <!-- End List -->
  );
}

export default Skill;
