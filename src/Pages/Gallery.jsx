import React from "react";
import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import bgImage from "../assets/images.jpg";
import image1 from "../assets/images/img1.jpeg";
import image2 from "../assets/images/img2.jpeg";
// import image3 from "../assets/imagesimg3.jpg";
import image4 from "../assets/images/img4.jpeg";
import image5 from "../assets/images/img5.jpeg";
import image6 from "../assets/images/img6.jpeg";
import image7 from "../assets/images/img7.jpeg";
import image8 from "../assets/images/img8.jpeg";
import image9 from "../assets/images/img9.jpeg";
import image10 from "../assets/images/img10.jpeg";
import image11 from "../assets/images/img11.jpeg";
import image12 from "../assets/images/img12.jpeg";
import image13 from "../assets/images/img13.jpeg";
import image14 from "../assets/images/img14.jpeg";
import image15 from "../assets/images/img15.jpeg";
import image16 from "../assets/images/img16.jpeg";
import image17 from "../assets/images/img17.jpeg";
import image18 from "../assets/images/img18.jpeg";
import image19 from "../assets/images/img19.jpeg";
import image20 from "../assets/images/img20.jpeg";
import image21 from "../assets/images/img21.jpeg";
import image22 from "../assets/images/img22.jpeg";
import image23 from "../assets/images/img23.jpeg";
import image24 from "../assets/images/img24.jpeg";
import image25 from "../assets/images/img25.jpeg";
import image26 from "../assets/images/img26.jpeg";
import image27 from "../assets/images/img27.jpeg";
import image28 from "../assets/images/img28.jpeg";
import image29 from "../assets/images/img29.jpeg";
import image30 from "../assets/images/img30.jpeg";
import image31 from "../assets/images/img31.jpeg";
import image32 from "../assets/images/img32.jpeg";
import image33 from "../assets/images/img33.jpeg";
import image34 from "../assets/images/img34.jpeg";
import image35 from "../assets/images/img35.jpeg";
import ImageGallery from "../components/ImageGallery";
import Button from "../components/Button";

const Gallery = () => {
  const images = [
    image1,
    image2,
    // image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    "https://lh4.googleusercontent.com/JaFQtw2Rn9cobdEfkw13ckqaohh6II-vZPLpNvZ12cS_dY4o-PsrQeY9d1f-jnFDz_BJ0IVDlw0gufUrEzCY2wNtEYl4cd78-7Gwa1sKqzorG0vHQriIrvnFI4S8-UzBhQ=w1280",
    "https://lh5.googleusercontent.com/C9qHFr6qJ594IVL7kW44zbrhMYWRcJO5105fbQIX5k46OomaRyph8XEqomxocEQ5FL36ygD2ROF-PN0nLpush75p9Kl_Uk0HO-uc7jWNYPOyNmNETV_sXYarFAEniH-Y2w=w1280",
    "https://lh3.googleusercontent.com/4F7Gss2ltQYPmdRy5yoPs1u0fZ8he3WvdnhguiJ9HI58FUjCcxD6NiXYo2vMm_0c7FN4jqIPYxpDqXdz1lbbRogjFT7S0aYP7xyVrb6LYzLKlYlKMeXtpoFv7BlhSCs8ZQ=w1280",
    "https://lh3.googleusercontent.com/d4IvE3CjURTdgZtAo5tvr_R_SLuHRfkS5qcUhz4K9VxgC9naevnIokIe0Yg1zuEw67ZZjoOUx9hpF__A9z25XzQxJGpNbcVSnsYhxJ5TzhkdaZ_UW5_UzyRz34VvkiGC-g=w1280",
    "https://lh5.googleusercontent.com/WuaJnFHAPSeap_1x2WiDqVJ2xP2IUDUMiwvg-dOMPkHWZxRG-utbRd6G9qQnYjF3zEwTNutkz-JtiadAuUPvsjyG1t5BVhc0sUml1BIPErfMXGLqozBXPAZY3jlTK_iUfQ=w1280",
    "https://lh6.googleusercontent.com/c-K0M6MaJOtl5gtr5aMTEcxjxIwpVjxPwRScwRjfFLSZPPk9g7ZGAgOzujKvQ9-vu1OUmEhjafWBfCi0weX03-824w48xK0kjVmm58A1N13lSYuJcNyi5qcbNaeTK7YXIA=w1280",
    "https://lh3.googleusercontent.com/Gj2tSOLIEaXuoXTxshfw8WazmWaDFj6z-ci3jH_3QnDXYhrGkuRuo-0hUIT9ghf0eyyuRCn0wNwb-Xac9BCrlDXjwcqxlBuTHlfWsl_JvJM3IMYYaTDgG9v07uUIOB_g=w1280",
    "https://lh5.googleusercontent.com/6LZeD4lC1aY58_HGZoMOIbZl3PHAXeyx-04yhilUDx9Mv3KUk2ubbkOKf5bK2x7Q-BsmIcvzUtYAGYErEVmamZ8cpH8hw6JwEDHgasfVcqTbNiSJ7QNVJjblpYnOfYJGUw=w1280",
    "https://lh4.googleusercontent.com/nTauVSrN4dS6xny8LMi2CpjBCv9Rvk6n2n21DrMcGCqhApXVm59T6JcQhkczSQwYCgEsRaVyofIni2pi8NIeUvfWYSZZwzR9Ja7tlfaMwlJKRWUamGOV2ft2wIApRob4SA=w1280",
    "https://lh5.googleusercontent.com/qJW68n8-obZJYCqC2hOcjRhB6fatesHTd2_fR4eyGiq6NAqrPdWsy7qavbcH0nYguv_BfN58ufpcinxYYj79zEcWsGAlwS3c7Aigj6xICseHWIum9u2b3M50xi8lzjCtzw=w1280",
    "https://lh6.googleusercontent.com/QSLNs-PVzltTC9My5wYRNQRfhdRF8UR2QKrZQPHrqEPfFSTVwW2gtkK3T7z4YRPEE1ynmk8hFdQrA35vPdbehgeMVc8YvY5WsnOs6gJK69sxybOUwmH7trMhDcmz0zoKkA=w1280",
    "https://lh3.googleusercontent.com/Q4vCz93gPkSBA0fX3HC74KqPC30dCeIeMEEuLHQNmI3N1cZcvEXhaaVE36_UWeMY-EkaurJhkeVH6VzGJHrxcclSap9KZyiTeAhZ4r4x4DJ7DkaBM6iOR3VN1HBsYNvksw=w1280",
    "https://lh3.googleusercontent.com/oOxJ0MkpiGSj-BPqbVo7O1iREK1RGNUF4Fhd7hZFPMe1o6H7iYlWOYjEydewZJXlsP-F_Uv_Latj3O0isrDYk-plgKnBnrT16K55RWE9gm7sJvausxegPX_ga92x23L38w=w1280",
    "https://lh5.googleusercontent.com/CkNye-I0w66hUpk_FIjJW8hoRL0pSKPdQ_SV3gR9YZEX054UJCgNBM3ZeUNtKmN2PsqZ7U9J0XKnHb9EcZRqClqTLFsYorCnBU3KTCZuUY2mPZKEZnI3SnjA87kBnTHGiA=w1280",
    "https://lh6.googleusercontent.com/CU-ddc8QbvGFPFvKM0WsaI2REGX08wNLQMAWu-36vGyyxxi3rCWJfcF2Rw0LCjtRjuTBwnF7YMlQJXVYfYwjxGoGa3UxyhHZhetnXRDVaPwSBU8OYqz2ZYY8P2NFbVWeQw=w1280",
    "https://lh6.googleusercontent.com/XkhjShD98uCCIUfUrTZY8lzPuQS5kdE060orV3Y5RQ9usrNGGoQ3uTWrZrW3lHU8ZCJ3BcjJZBE0ZSFPXtDr-hS08b8mLMy0Rdjb7z0-fEORipkdSRQ2SPc3sh7xzkDWqA=w1280",
    "https://lh4.googleusercontent.com/CBrA25qlNy-UuUhowMtFj-L7AQcDPYbhySwToysfS9Ec9blp1ir5DqfWouJ7udBQpAS2NHqmp0QsPkgW4VBl7LtEXQShzxSPiDJrdgvGWXL5VKk7-S4T4jSTQBGqTSPxOQ=w1280",
    "https://lh6.googleusercontent.com/gKyebbF5dj81P8yR30nbJS7n-GnMqMyzYR09LeaZj2VHtJRuDc6FQBI1ElnEZpv2mJnP2B7Cg8ueB5OjrAWoRdgERCXdoGoRN6OTCkCz4HOW6JW7oqknIeUdK2n7hLjlPA=w1280",
    "https://lh5.googleusercontent.com/ha0-djN5eTFRnWHGOFklxmc72uS140GSuzvq2R3ipTgCMj2nUqdmYc2U9CvLL8lE9l6NlydkRKBgpkjG3fOVi9XesaRllBWeNTcD6qaFVXRE1EHvFxffoKtaPlkEx6BEzA=w1280",
    "https://lh6.googleusercontent.com/KjenIByRMI23o6mSXrW_2phlIuiqekTB6F0x5na-tewHRL4p3dHnBSfYBEI8pjIxHIkys_8uxJoyDy_glC5SV0mxQjWuH7_bT26w7140x9AK7vrqOIXh7z1ivu8URkknEw=w1280",
    "https://lh5.googleusercontent.com/hoKphAmPScFjFy9e1nNzpMJl3mbtjyM6ozfpcwflRaef8e0nUnqAif3dTPu8LC_AQURUi4tnOLGQjYPvubsJigsJ_RxRflsV_7ibOQf0YwkAI0ndB317V2RwL1nCxtsICQ=w1280",
    "https://lh4.googleusercontent.com/qc0k62kpD8Y3JyhQoDjUUhYD8oD7iagb_FTNzaAk7JgmHFYlpHfFCbZR34eSxCVMCUjOAvetv9Kt6Otporpaly6tNZiBlZ0TT8N1PEFqaLSSZ2BEHNKAooDLxIWqLkHFUQ=w1280",
    "https://lh6.googleusercontent.com/HNrULssztuRHBOZFMmd6oVnT7rEn1sWI2G7ek169nMMNyt0-d37bC5T8-J90w2xFYhlW1Dg6J0I4E5Vm7rH8GyxiB1i3CziKqGnOdrwY490utRIFvtR9DALtZkC25w1ICg=w1280",
    "https://lh3.googleusercontent.com/lR64FDMjcE_I643vaolIJTNyr8hfTsLVxlcd-gpOIwiR8t3CtyeDcOlqUleWvx29tCF0G9u-gMPQfyqAs1FwSALjFWgkW3laE4_kVFd6af4C0cXG7HvQVCZHcsKn82USgw=w1280",
    "https://lh3.googleusercontent.com/w84ddEKwuba-0QIUbSV0k297Sgw0gjhMc0_yX6rzB5F5PNj6Sju6_j0oNRgvwNNhH0YqPBDsDAFmrcBjgzv7VmR2znzQqj9r-H38bFwOviUwlyjzFKInAS4TMOcWTfaPKA=w1280",
  ];

  // const galleys = [];

  return (
    <div>
      <Header />
      <HeroComponent imgLink={bgImage} title="Gallery" />
      <div className="mt-6">
        <div className="px-32">
          <iframe
            width="560"
            height="350"
            src="https://www.youtube.com/embed/HlfPUoUG61A?si=vs2OwLs0Px-9ZJdJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <ImageGallery images={images} />
      </div>
      <div className="flex justify-center mt-10">
        <Button />
      </div>
    </div>
  );
};

export default Gallery;
