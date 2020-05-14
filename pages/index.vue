<template>
  <div>
    <Navbar active="home" />
    <main class="main font-muli">
      <div class="mt-16" style="background: #2c2c2c;">
        <section class="md:flex mt-10">
          <div class="w-1/6 mt-24 ml-8 hidden md:block">
            <div class="active-dot mt-2"></div>
            <div class="point mt-2"></div>
            <div class="point mt-2"></div>
            <div class="point mt-2"></div>
          </div>
          <div class="xl:w-2/6 4/6 xl:pt-20 p-5">
            <h3 class="text-4xl font-muli font-medium text-white">We design and build Digital</h3>
            <vue-typed-js
              :strings="['Experiences', 'Product', 'Software']"
              :typeSpeed="100"
              :backSpeed="50"
              :loop="true"
            >
              <h1 class="text-primary font-poppins font-extrabold text-6xl typing"></h1>
            </vue-typed-js>
            <h5
              class="font-muli text-xl text-white font-normal"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra quis facilisis sed urna. Id et et donec erat. Nunc nulla est amet, morbi pellentesque. In aliquet dolor purus congue in. Id sed duis neque tellus quam cras nulla.</h5>
            <button class="bg-gray-100 mt-4 text-gray-900 rounded-md px-12 py-5 mb-5">Learn More</button>
          </div>
          <div class="w-4/6 flex-1 hidden xl:block">
            <img src="~/assets/img/header img.png" alt="screens" />
          </div>
        </section>
      </div>
      <section>
        <section>
          <div class="xl:w-2/4 w-full xl:ml-40 ml-2 mt-10">
            <div class="whiteline"></div>
            <h3 class="font-muli font-extrabold text-white text-5xl">Who We Are</h3>
            <div class="whiteline"></div>
            <h4
              class="text-white xl:w-2/3 px-5 mt-4 text-lg xl:leading-6 font-muli font-normal"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dolor montes, vel, cursus integer. Malesuada erat amet sed eleifend id risus feugiat. Risus, id suspendisse sit leo. Sit tristique dictum est in et.</h4>
          </div>
        </section>
        <section>
          <div class="flex">
            <section class="hidden xl:w-1/6 xl:block"></section>
            <section class="xl:w-3/6 w-full mx-2">
              <div
                class="bg-gray-500 flex xl:py-5 mt-10 rounded-lg"
                style="background: #1F1F24; width: 20em"
              >
                <img src="~/assets/img/Frame.png" alt="play icon" />
                <span class="text-white font-muli text-xl text-center m-auto">See behind the scenes</span>
              </div>
              <section class="text-white flex">
                <div class="m-2">
                  <p class="text-4xl text-primary">500+</p>
                  <p class="xl:text-xl xl:text-5xl text-base font-bold">Completed Projects</p>
                  <div class="underlinestatus"></div>
                  <p
                    class="statustext"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tincidunt integer.</p>
                </div>
                <div class="m-2">
                  <p class="text-4xl xl:text-5xl text-primary">200+</p>
                  <p class="xl:text-xl text-base font-bold">Completed Projects</p>
                  <div class="underlinestatus"></div>
                  <p
                    class="statustext"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tincidunt integer.</p>
                </div>
                <div class="m-2">
                  <p class="text-4xl xl:text-5xl text-primary">80+</p>
                  <p class="xl:text-xl text-base font-bold">Completed Projects</p>
                  <div class="underlinestatus"></div>
                  <p
                    class="statustext"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tincidunt integer.</p>
                </div>
              </section>
            </section>
            <section class="xl:w-2/6 hidden xl:flex">
              <img src="~/assets/img/who we are.png" alt="team" class="inline" />
              <div class="mt-24 ml-8 hidden md:block">
                <div class="point mt-2"></div>
                <div class="active-dot mt-2"></div>
                <div class="point mt-2"></div>
                <div class="point mt-2"></div>
              </div>
            </section>
          </div>
        </section>
        <section class="mt-10">
          <section class="w-full flex flex-row-reverse">
            <div class="xl:w-2/4 w-full ml-2 mt-10">
              <div class="whiteline"></div>
              <h3 class="font-muli font-extrabold text-white text-5xl">What We Do</h3>
              <div class="whiteline"></div>
              <h4
                class="text-white mt-4 px-5 xl:px-0 text-lg xl:leading-6 font-muli font-normal"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dolor montes, vel, cursus integer. Malesuada erat amet sed eleifend id risus feugiat. Risus, id suspendisse sit leo. Sit tristique dictum est in et.</h4>
            </div>
          </section>
        </section>
        <section class="whatwedo">
          <section class="h">
            <div class="i" style="border-right: 1px solid white">
              <section>
                <img src="~/assets/img/Vector.png" alt="vector" style="width: 30px; height: 30px" />
                <section class="stack">
                  <h3>Front-end</h3>
                  <h3>Development</h3>
                </section>
              </section>
              <span class="j">
                <span class="k"></span>
                We build brilliant digital products and teach others to do the same. As a leading web design and digital marketing company in Nigeria. We’ve helped hundreds of businesses achieve success. Find out what we.
              </span>
            </div>
            <div class="i" style="border-right: 1px solid white">
              <section>
                <img src="~/assets/img/Vector.png" alt="vector" style="width: 30px; height: 30px" />
                <section class="stack">
                  <h3>Front-end</h3>
                  <h3>Development</h3>
                </section>
              </section>
              <span class="j">
                <span class="k" style="width: 35px; height: 19px; background-color: aliceblue;"></span>
                We build brilliant digital products and teach others to do the same. As a leading web design and digital marketing company in Nigeria. We’ve helped hundreds of businesses achieve success. Find out what we.
              </span>
            </div>
            <div class="i">
              <section>
                <img src="~/assets/img/Vector.png" alt="vector" style="width: 30px; height: 30px" />
                <section class="stack">
                  <h3>Back-end</h3>
                  <h3>Development</h3>
                </section>
              </section>
              <span class="j">
                <span class="k"></span>
                We build brilliant digital products and teach others to do the same. As a leading web design and digital marketing company in Nigeria. We’ve helped hundreds of businesses achieve success. Find out what we.
              </span>
            </div>
          </section>
        </section>
        <section class="newsletter">
          <div>
            <h3 class="text">Get started now!</h3>
            <input type="text" placeholder="Your Email Address" name id class="input" />
            <button type="submit" class="submit">Send mail</button>
          </div>
        </section>
      </section>
    </main>
    <Footer active="home" />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Typed from "typed.js";

export default {
  components: {
    Logo,
    Navbar,
    Footer
  }
  // created() {
  //   console.log("hii", Typed);
  //   let options = {
  //     strings: ["Experience", "Products"],
  //     typeSpeed: 40
  //   };

  //   let typed = new Typed(".typing", options);
  // }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Muli:wght@200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
  /* background: #19191b; */
}
.typed-cursor {
  color: wheat;
  font-size: 70px;
}
.typed-element {
  height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.header {
  background: #2c2c2c;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  flex: 1;
  width: 100vw;
}

.navbar {
  display: flex;
  justify-content: space-around;
}
.logo {
  padding-top: 1rem;
  margin-left: 5rem;
}
.hamburger {
  display: none;
  height: 45px;
  width: 45px;
  cursor: pointer;
}
.hamburger .line {
  width: 35px;
  height: 5px;
  background-color: #1a73e8;
  margin: 6px 0;
}
.nav {
  display: flex;
  margin-right: 1rem;
  justify-content: space-around;
  margin-left: 17rem;
  width: 40rem;
}
.list {
  display: flex;

  list-style: none;
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0;
  cursor: pointer;
  /* border:  1px solid green; */
}
.list-item {
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.home {
  background-color: #f2c94c;
  border-radius: 10%;
  color: #fff;
}
.phone {
  padding: 1rem;
  border: 2px solid #f2c94c;
  background: black;
  border-radius: 2rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  outline: none;
}
.num {
  color: #f2c94c;
  padding: 0 0.5rem;
}
.we {
  display: flex;
  background-color: #2c2c2c !important;
  box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.point {
  width: 6px;
  height: 6px;
  background: lightgrey;
  border-radius: 50px;
  margin-left: 1px;
}

.active-dot {
  background: #f2c94c;
  width: 10px;
  height: 10px;
  border-radius: 50px;
}

.design {
  width: 450px;
  position: relative;
  left: 15rem;
  top: 9rem;
}

.whoweare {
  padding: 3rem 0;
}
.whiteline {
  min-height: 0.1rem;
  width: 20rem;
  background: white;
}
.whoweare .dots {
  height: 150px;
  width: 150px;
  position: absolute;
  right: 0;
  margin-top: 14rem;
}

.whoweare .dot1 {
  height: 5px;
  width: 5px;
  background-color: grey;
  position: absolute;
  border-radius: 50px;
  right: 3rem;
  top: 15px;
}

.whoweare .dot2 {
  height: 10px;
  width: 10px;
  background-color: #f2c94c;
  position: absolute;
  border-radius: 50px;
  right: 2.9rem;
  top: 35px;
}
.whoweare .dot3 {
  height: 5px;
  width: 5px;
  background-color: grey;
  position: absolute;
  border-radius: 50px;
  right: 3rem;
  top: 55px;
}
.whoweare .dot4 {
  height: 5px;
  width: 5px;
  background-color: grey;
  position: absolute;
  border-radius: 50px;
  right: 3rem;
  top: 75px;
}
.whoweare .who .we1 {
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 58px;
  line-height: 73px;
  color: #ffffff;
  text-transform: capitalize;
  justify-items: flex-start;
  margin-left: 15rem;
}

.whoweare .who .are {
  font-family: Muli;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  width: 55vw;
  color: #ffffff;
  margin: 1rem 15rem;
}
.main .behind {
  display: flex;
  justify-content: flex-end;
  margin-left: 17rem;
}
.main .behind .scenes {
}
.play {
  display: flex;
  align-items: center;
  background: #1f1f24;
  box-shadow: 0px 0px 5px rgba(184, 184, 184, 0.15);
  border-radius: 20px;
  width: 20rem;
  cursor: pointer;
  margin-top: 2rem;
}

.main .behind .scenes .projects {
  color: white;
  display: flex;
  /* border: 1px solid yellowgreen; */
  width: 40vw;
  margin: 1.5rem 3rem;
}
.main .scenes .projects div {
  margin: 0 1rem;
}
.main .behind .scenes .projects .numb {
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 75px;

  color: #fcd230;
}

.main .behind .scenes .projects .status {
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  text-transform: capitalize;
}

.statustext {
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
}

.underlinestatus {
  height: 0.02rem;
  width: 10rem;
  background-color: #fff;
  margin: 0.4rem 0;
}

.main .behind .team {
  position: relative;
  right: 7rem;
  bottom: 5rem;
}

.play span {
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 16px;
  color: #ffffff;
}
.main .behind .scenes {
  display: flex;
  flex-direction: column;
  width: 650px;
}
.main .whatwedo {
  padding: 1rem 0;
  position: relative;
}
.main .whatwedo .p {
  height: 150px;
  width: 150px;
  position: absolute;
  right: 0;
  top: 22rem;
}

.p0 {
  height: 5px;
  width: 5px;
  background-color: grey;
  position: absolute;
  right: 3rem;
  border-radius: 50px;
}
.p1 {
  height: 5px;
  width: 5px;
  background-color: grey;
  position: absolute;
  right: 3rem;
  border-radius: 50px;
  top: 15px;
}
.p3 {
  height: 5px;
  width: 5px;
  background-color: grey;
  position: absolute;
  right: 3rem;
  border-radius: 50px;
  top: 48px;
}
.p2 {
  height: 10px;
  width: 10px;
  background-color: #fcd230;
  position: absolute;
  right: 2.9rem;
  border-radius: 50px;
  top: 30px;
}
.main .whatwedo .e {
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 58px;
  /* line-height: 73px; */
  /* identical to box height */
  display: flex;
  justify-content: flex-end;
  margin-right: 8rem;
  text-transform: capitalize;
  color: #ffffff;
}

.main .whatwedo .border {
  min-height: 0.1rem;
  width: 24rem;
  background: white;
  margin: 0.5rem 45rem;
}

.main .whatwedo .g {
  font-family: Muli;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: right;
  color: #fff;
  width: 55vw;
  margin-left: 30rem;
  padding: 2rem 0;
}
.main .whatwedo .h {
  display: flex;
  justify-content: center;
  width: 75vw;
  height: 40vh;
  margin-left: 12rem;
  border: 1px solid white;
  margin-top: 2rem;
}
.main .whatwedo .i {
  padding: 2rem;
}
.main .whatwedo .i section {
  display: flex;
  padding-bottom: 1rem;
}
.i .stack {
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  height: max-content;
}

.main .h .j {
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-top: 314px !important;
  color: #ffffff;
}

.main .h .j span {
  height: 0.5rem !important;
  width: 2rem !important;
  background-color: #fff;
}

.main .i .k {
  height: 5px;
  width: 34px;
}
.main .newsletter {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main .newsletter div .text {
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 48px;
  /* identical to box height */
  text-transform: capitalize;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 1rem;
}
.main .newsletter div .input {
  border: 2px solid #ffffff;
  box-sizing: border-box;
  width: 45vw;
  height: 4.5rem;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #1f1f24;
}

.main .newsletter div .input::placeholder {
  font-size: 20px;
  padding: 30px;
  color: #fff;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
}

.main .newsletter div .submit {
  height: 4.48rem;
  background: #1a73e8;
  width: 10rem;
  margin-left: -0.5rem;
  padding-top: -1rem;
  border-radius: 0px 8px 8px 0px;
  border: none;
  color: white;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-transform: capitalize;
  /* line-height: 28px; */
}
</style>