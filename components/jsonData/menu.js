export const dropdownMenu = {
  main_links: [
    {
      name: "Natal Chart",
      link: "/natal-chart",
    },
    {
      name: "Solar Return",
      link: "/solar-return",
    },
    {
      name: "Synastry Chart",
      link: "/synastry-chart",
    },
    {
      name: "Personalised Transit",
      link: "/personalised-transit",
    },
    {
      name: "tarot",
      link: "/tarot",
      sub_menu: [
        {
          name: "Tarot Prediction",
          link: "/tarot/tarot-prediction",
        },
        {
          name: "Yes/No tarot",
          link: "/tarot/yes-no-tarot",
        },
      ],
    },
    {
      name: "horoscope",
      link: "#",
      sub_menu: [
        {
          name: "Daily Horoscope",
          link: "/aries-daily-horoscope",
        },
        {
          name: "Monthly Horoscope",
          link: "/aries-monthly-horoscope",
        },
        {
          name: "Zodiac Compatibility",
          link: "/zodiac-compatibility",
        },
      ],
    },
    {
      name: "Numerology",
      link: "/numerology",
    },
  ],
  social_links: [
    { name: "facebook", link: "/" },
    { name: "youtube", link: "/" },
    { name: "instagram", link: "/" },
  ],
};

export const socialIcon = {
  facebook: `<svg fill="currentColor" class="w-6 h-6    " id="Layer_1"
                                 style={{enableBackground: 'new 0 0 512 512'}} version="1.1" viewBox="0 0 512 512"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64  H288z"/>
                            </svg>`,
  youtube: `
  <svg fill="currentColor" class="w-6 h-6    " enableBackground="new 0 0 32 32"
                                  version="1.0" viewBox="0 0 32 32">
                                <g>
                                    <path
                                        d="M31.67,9.179c0,0-0.312-2.353-1.271-3.389c-1.217-1.358-2.58-1.366-3.205-1.443C22.717,4,16.002,4,16.002,4   h-0.015c0,0-6.715,0-11.191,0.347C4.171,4.424,2.809,4.432,1.591,5.79C0.633,6.826,0.32,9.179,0.32,9.179S0,11.94,0,14.701v2.588   c0,2.763,0.32,5.523,0.32,5.523s0.312,2.352,1.271,3.386c1.218,1.358,2.815,1.317,3.527,1.459C7.677,27.919,15.995,28,15.995,28   s6.722-0.012,11.199-0.355c0.625-0.08,1.988-0.088,3.205-1.446c0.958-1.034,1.271-3.386,1.271-3.386s0.32-2.761,0.32-5.523v-2.588   C31.99,11.94,31.67,9.179,31.67,9.179z"/>
                                    <polygon fill="#27272a" points="12,10 12,22 22,16  "/>
                                </g>
                                <g/>
                                <g/>
                                <g/>
                                <g/>
                                <g/>
                                <g/>
                            </svg>`,
  instagram: `
  <svg fill="currentColor" class="w-6 h-6    " version="1.1" id="Layer_1" x="0px"
                                 y="0px"
                                 viewBox="0 0 56.7 56.7" enableBackground="new 0 0 56.7 56.7">
                                <g>
                                    <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
                                    <circle cx="41.5" cy="16.4" r="2.9"/>
                                    <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
                                </g>
                            </svg>`,
  twitter: `
                            <svg fill="currentColor" class="w-6 h-6    " id="Layer_1"
                                 style={{enableBackground: 'new 0 0 512 512'}} version="1.1" viewBox="0 0 512 512"
                                 width="512px" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5  C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1C172,179,100.6,140.4,52.9,81.7  c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.1,63.3,43.1,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95  c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5  c-7.8,0-15.5-0.5-23.1-1.4C62.9,432,113.8,448,168.4,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5  C462.6,146,479,128.9,492,109.5z"/>*/}
                            </svg>`,
};
