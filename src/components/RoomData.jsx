import React from "react";
import { CarouselDefault } from "./Carousal";

const RoomData = () => {
  const array1 = [
    "https://lh6.googleusercontent.com/Pdh1LnvhDsGFXOb2TNoFwr-CoWGo21qg2OgkcnF56kX3r86htYd_GqOADJgEfkP9Q7ZR7R8nZj8LW9854r-XWCgctD0h5QElWB45JXnlL_SxD3c75fhUtf_d8ftD1p-ZjQ=w1280",
    // "https://lh5.googleusercontent.com/W-VDq1dWDe5Kj9HBuAca9KOIzdxq9_hbdKZ77UFNMgg0fXzAI6oFc6-M1a0yX4kxwMqnWYNdnidpvek1hx4DQ2gfbbKYat7bQEUv9siaht4_rPnohHeRcSA-CyIImDtf1Q=w1280",
    "https://lh5.googleusercontent.com/olp-ClGz2PbyT3Ro6at2No00WAfF8rLCMVJfnJyejQ7y7A5PZVuTL05EPdxHmwS21km2d-Zy7DZ77aZu2cRXQYdNMnDm1W6Hd6Z5S_QPdV0mkVBXkpC7p1Fu3xObcP2_jA=w1280",
    "https://lh5.googleusercontent.com/JCp54NgtnJrnhju74h6AbjiMV4LTshKQfv-U5YfwEFVfbtKhkiXkgYxfXHylWO7LS__0YR1xZmitUDITlnpP4TyvTdH0tZ_r3hnhNc12W43oO70YqzguDrv03Fgq313t4g=w1280",
    "https://lh5.googleusercontent.com/41kHt_3yRRZ4f_LXhF_WzHTTmLuei0pzX7rguymQgW1dOz-FIM9Q8ZggGeXZIqbbA-EunYEzgiHVACNqEay9FViOAHwqTcVwC6nFi_mBlyLSCzDnDHpbfOudRa1UJPDqCQ=w1280",
  ];

  const array2 = [
    "https://lh5.googleusercontent.com/C0L_ypBW0uhIkmwiVGdTiiNiSBXa_KCxZvN8kJH967TfQ-8BiOj5WIRMjvFOWD1LmW2sdbGiiBFZZq5fumtxUqyjthOi-GXJuG35oatnofoKRPluLmpAR2batY7iCOsOTQ=w1280",
    "https://lh5.googleusercontent.com/fzc2RB7s7N4IdW7LEDCB0Dxa5dD3Uy8_RnBIi9T9ZcWlD2Zl3MjK9Zh6mT0d3JYV5AiaqD0DdlyKO3hUkZU5RfKZ-39ZgR6VU4RdVOEJ1HqvPel09dlNPZZNq2tJ895y0A=w1280",
    "https://lh3.googleusercontent.com/G-x5bfa9gWqQkGxb5oka_PnJPNW03xD4lB0RMgIUBWrI4wzecguZbTVub94qsMPxPy4QLpAQlv32HbPgQwNHEbFeAjLaPeTSJbX5qFGQ3TwUuajgIFdgI7MNmRlmoxnt6Q=w1280",
    "https://lh5.googleusercontent.com/wp_ImxTYI-8vLDBowmdJvNDMQqsoomU9eAHtw2RYsRbs2m6-2RiiIMGhn6w5hPSiWcKJgzp-ymczIB2z6sol44IxGEz0nivFuMmNH5dmca8M-obQTmrPfLeYQALlewMkFQ=w1280",
  ];

  const array3 = [
    "https://lh5.googleusercontent.com/sD0Hjc-BZ4y9ySAsaWiSycGvm41WOzPYN8ukcA3NpUVHCFReEiUyeVvdhPRMJj8cwyEckSpF7GEZMSQYkgL4bQ8ohkIPtA-hnWx9MplBdp7OVYRlh7pQXZE8e_hkQMBkrQ=w1280",
    "https://lh6.googleusercontent.com/IKrCcHOHvm29mOMI9t301B3Px3K-P10J04qea810rpl_XEH3r_iczXpkGvHnfDt4Zp6KVANvIHhNWDi7_LhWZJHeogtSA6DL6RuNbjq4j28belkbzVfZMsDUjy3B5IP5=w1280",
    "https://lh6.googleusercontent.com/qiWRvHuBYrZyzme0aQ7Bh585fQ8GszIIFVhgK8QVSG4zjDSHXJjH9C3g2fXgTEDSaJlDmjXLzVVCNcOOPRE871y4DJfUtkK7jmx1DIOKTkvY3Zijq3zEcuQN3UJDqhb6tg=w1280",
    "https://lh3.googleusercontent.com/WPrayb2H6MYDYa0tv4fHVsF_0mbYNfMOk8qxjbIf79H1FMhN_niYH5BME5hwEcLofTJiuknyFcyVhCd_35O-8URvA8ig0hX2ewWhFhIBvkp827zXJyKL_4aiSnhhJvYyRw=w1280",
    "https://lh5.googleusercontent.com/M41fRcCJrJ08qJJIVeq-a_yQi2JkcPWDrhmcuSAYlktHScavUvUcvQP1lon1_gvA_kcxKiBxVAfC2Lqoq1xDym3TlQcAK229gQdA5CClI9CyQBw0HM0IeBDN3u7B7MxJLQ=w1280",
  ];
  const array4 = [
    "https://lh6.googleusercontent.com/uPbu3MDvjtITPxziFA4iNbnFjnYElkd1C1-So8GvTeVPvNS21w7xniSzKR-F6ywwyNFwIvlZ0fBSyqswNkR4KrIcy4ZJPXuPpK598XoR1-jJ2kEPRrlhhpIbyZqifhnxeQ=w1280",
    "https://lh4.googleusercontent.com/nNRh5i3Uyign-rWR3dcgtfgkwlPLwRCgX0lSOXmvDSMSbMb_ECHMwUi7mWesh96gduYcNEOR2pWgI9Jr_AwL56jsRzSfL5Mb8SXIk8j260ZUz3WluGI0MNKD-ncWQNKjDg=w1280",
    "https://lh6.googleusercontent.com/VeBHkn6Tx5FiH7ZSZSAuH4M3EbqF0MDVrUBqwRg28Rv9SF2Zdz1IoAYo7XLM5NewWuCaMSGz-yl6y4usq_BO97SQkeDcy8aucH3mvJMOnpCcAsdwpoDJU1hdtSeormI1Wg=w1280",
  ];
  const array5 = [
    "https://lh3.googleusercontent.com/UgsXvC82d2fDeMNNSugDteyH7WPBjkqSWDAbE1on4o9NqAOu6phLq6XzSkVuZo-azchgkS8xsdvBcpnaRBfF3vmiu0-ypm8VYjedAEfW-Z6Zqj0wJJWOfvnLuX9kdBtY_A=w1280",
    "https://lh5.googleusercontent.com/WMqZeJME1g9HptgFYiaYQHzs2fGDLribOGrqnhsHmPMcH_Fk8UgKAeRBywIyqUGXc6Pnv99T8qRh5m-Kewv8WUb5mXef4z57lzFVPqir54KJcdIhsqVIoENCzRZg_xfmsQ=w1280",
    "https://lh6.googleusercontent.com/SbrXm02H2i6tuXdjSlUKbZub3u4gNJvBpgHAUamW9J7cYM7Svh0vXL7M4jIS9tdqc1FYLA8txpdKAuRW8wEtiXJWPEcmTwF3A9JFC16aeFeWj_Npjlk4OMQ1348j4p8hvw=w1280",
    "https://lh6.googleusercontent.com/RHjkLZHqO9wJmtQVaLFhiE0NRnojHdP3POg62edM__1UvyUoS54fEfGrdZfhkJYL9kQt0NpiQdVgdhEFIllGmMEFYSbisa3x_mrhNY6beRqgX5EjJHrBKTQ1-gd_K-y2ug=w1280",
    "https://lh5.googleusercontent.com/HL-hjE9QyNKcNUqWaM5iRpPzYzVr67Rl2jhH9KW9XtvKsyWQIxHWOVlWE4_RYMD4S0dxiNx59AV7vf4Ta2OiZGQdGLwlHhYqMIS6XC9O0PQrmK814mu8CN6wNQophpzbEQ=w1280",
  ];
  const array6 = [
    "https://lh5.googleusercontent.com/RdJ7rWivTx0SraYSbihF9r4Nk7HXQ9dfg6zy8omTTMKjr6NKn7dcwACM-NNKuXpf-P5zikv2RRmQsu_w-7DoQG_guUCyg6RmIonlUv7W6tmUdfpCt5zTLRcxke60_wRU2A=w1280",
    "https://lh5.googleusercontent.com/FLqFIWtMHF2fanb1izNHghpierWtpLo2D4180CNTc_c2qSGmHvaoZZOGHEEj29C2E_enorCVvxKK-JgI3yjkeuQmbrPKSSgz8tgPTVD4S1qeuOkHr1DlEg-9Ljp5xygccQ=w1280",
    "https://lh5.googleusercontent.com/kY9dxSmApErZPwRMkcnJsuvW16Jkk-4lNFEiAg71E-v52y2CWii7Y9svUP2hhHZs3DbU5PrITlq0MWOSA6UH8lg3Hyvq6CVmA4ujoYh_u53MNFsuxUr3CdqjCQT9Xmci8A=w1280",
  ];

  return (
    <div>
      <div className="flex mt-7 px-20">
        <div>
          <CarouselDefault autoPlay={3000} images={array1} />
        </div>
        <div className="px-8 mt-4 ">
          <p className="leading-7">
            <span className="font-bold">
              Family Suite with 2 Queen Beds and Kitchenette:
            </span>
            Our spacious Suite Room is perfect for families or groups traveling
            together. The room features two comfortable queen beds and a
            separate living area with a sofa and a dining table. The room also
            has a kitchenette perfect for preparing light meals or snacks. The
            suite also features a private bathroom with complimentary
            toiletries.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 5000 (Double Occupancy) + GST
          </p>
        </div>
      </div>
      <div className="flex mt-7 px-20">
        <div>
          <CarouselDefault autoPlay={5000} images={array2} />
        </div>
        <div className="px-8 mt-4 ">
          <p className="leading-7">
            <span className="font-bold">
              Family Suite Room with 2 King Beds:
            </span>{" "}
            Our Suite Room with 2 King Beds is perfect for families or groups of
            friends. The room features two comfortable king beds and a separate
            living area with a sofa and a dining table. The room also has a
            private bathroom with complimentary toiletries.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 5000 (Double Occupancy) + GST
          </p>
        </div>
      </div>

      <div className="flex mt-7 px-20">
        <div>
          <CarouselDefault autoPlay={4000} images={array3} />
        </div>
        <div className="px-8 mt-4 ">
          <p className="leading-7">
            <span className="font-bold">Junior Suite with King Bed:</span> Our
            Junior Suite Room with a King Bed is perfect for guests looking for
            a bit more space and comfort. The room features a comfortable king
            bed, a sitting area with a sofa and chairs, a work area, and a
            private bathroom with complimentary toiletries. The room also has a
            work desk and chair, making it perfect for business travelers.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 4200 (Double Occupancy) + GST
          </p>
        </div>
      </div>

      <div className="flex mt-7 px-20">
        <div>
          <CarouselDefault autoPlay={6000} images={array4} />
        </div>
        <div className="px-8 mt-4 ">
          <p className="leading-7">
            <span className="font-bold">Deluxe Room with 2 Double Beds:</span>{" "}
            This room is perfect for families or groups of friends traveling
            together. The room features two comfortable double beds, a private
            bathroom with complimentary toiletries, and a sitting area with a
            sofa. The room also has a work desk and chair, making it perfect for
            business travelers.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 4000 (Double Occupancy) + GST
          </p>
        </div>
      </div>

      <div className="flex mt-7 px-20">
        <div>
          <CarouselDefault autoPlay={4000} images={array5} />
        </div>
        <div className="px-8 mt-4 ">
          <p className="leading-7">
            <span className="font-bold">Deluxe Room with King Bed:</span>
            Our Deluxe Room with a King Bed is perfect for guests who value
            comfort and convenience. The room features a comfortable king bed, a
            private bathroom with complimentary toiletries, and a sitting area
            with a sofa. The room also has a work desk and chair, making it
            perfect for business travelers.
          </p>
          <p className="leading-6">
            <br />
            Pricing: Rs 3800 (Double Occupancy) + GST <br />
            Rs 3300 (Single Occupancy) + GST
          </p>
        </div>
      </div>

      <div className="flex mt-7 px-20">
        <div>
          <CarouselDefault autoPlay={5000} images={array6} />
        </div>
        <div className="px-8 mt-4 ">
          <p className="leading-7">
            <span className="font-bold">Superior Room with King Bed: </span>
            Our Superior Room with a King Bed is perfect for guests who are
            looking for a comfortable and stylish room. The room features a
            comfortable king bed, a private bathroom with complimentary
            toiletries, and a sitting area with a sofa chair. The room also has
            a work desk and chair, making it perfect for business travelers.
          </p>
          <p className="leading-6">
            <br />
            Pricing: 3300 (Double Occupancy) + GST <br />
            2800 (Single Occupancy) + GST
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomData;
