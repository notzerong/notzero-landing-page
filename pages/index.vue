<template>
  <div>
    <Navbar active="home" />
    <main class="main font-muli">
      <div class="mt-16" style="background: #2c2c2c;">
        <section class="md:flex mt-10">
          <div class="xl:w-2/4 3/3 xl:pt-20 xl:ml-5 p-5">
            <h3 class="xl:text-4xl text-3xl font-muli font-medium text-white">We design and develop</h3>
            <h1
              class="text-primary font-poppins font-extrabold xl:text-6xl text-5xl"
            >Digital Products</h1>
            <h5
              class="font-muli text-xl text-white font-normal"
            >We develop a deep understanding of your business and the needs of your users. Grounding our design thinking into research, we'll help you create a solution that serves your customers and accelerate your business.</h5>
            <!-- <button
              class="bg-primaryblue mt-4 text-white hover:bg-yellow-500 font-bold rounded-md xl:px-12 xl:py-5 px-12 py-4 mb-5"
            >Learn More</button>-->
          </div>
          <div class="w-2/4 hidden xl:block">
            <img src="~/assets/img/header img.png" alt="screens" />
          </div>
        </section>
      </div>
      <a name="aboutus"></a>
      <section>
        <section>
          <div class="xl:w-2/4 w-full xl:ml-40 ml-2 mt-10 xl:pt-20 pt-12">
            <div class="whiteline"></div>
            <h3 class="font-muli font-extrabold text-white text-5xl">Who We Are</h3>
            <div class="whiteline"></div>
            <h4
              class="text-white xl:w-2/3 mt-4 text-lg xl:leading-6 font-muli font-normal"
            >Our engineering team is made up of dedicated, focused and experienced engineers, business expert and leaders. Our team helps drive digital product development and training experience by engaging and accessing clients across the entire development journey.</h4>
          </div>
        </section>
        <section>
          <div class="flex">
            <section class="xl:w-3/6 w-full mx-2 mt-6 xl:ml-40">
              <!-- <div
                class="bg-gray-500 flex xl:py-5 mt-10 rounded-lg"
                style="background: #1F1F24; width: 20em"
              >
                <img src="~/assets/img/Frame.png" alt="play icon" />
                <span class="text-white font-muli text-xl text-center m-auto">See behind the scenes</span>
              </div>-->
              <section class="text-white flex">
                <div class="w-1/2">
                  <p class="text-4xl xl:text-5xl text-primary">8+</p>
                  <p class="xl:text-xl text-base font-bold">Projects</p>
                  <div class="underlinestatus"></div>
                  <!-- <p class="statustext">We are an experiment lab with various ideas to build.</p> -->
                </div>
                <!-- <div class="m-2">
                  <p class="text-4xl xl:text-5xl text-primary">300+</p>
                  <p class="xl:text-xl text-base font-bold">Completed Projects</p>
                  <div class="underlinestatus"></div>
                  <p
                    class="statustext"
                  >We ensure clients are satisfied with their projects.</p>
                </div>-->
                <div class="w-1/2">
                  <p class="text-4xl xl:text-5xl text-primary">5+</p>
                  <p class="xl:text-xl text-base font-bold">Clients</p>
                  <div class="underlinestatus"></div>
                  <!-- <p
                    class="statustext"
                  >Our clients are always ready to put in words for us! reach out today.</p>-->
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
        <a name="services"></a>
        <section class="mt-10">
          <section class="w-full flex flex-row-reverse">
            <div class="xl:w-2/4 w-full mr-5 p-5 mt-10">
              <div class="whiteline"></div>
              <h3 class="font-muli font-extrabold text-white text-5xl">What We Do</h3>
              <div class="whiteline"></div>
              <h4
                class="text-white mt-4 xl:pr-32 text-lg xl:leading-6 font-muli font-normal"
              >We take pride in building digital products and teaching others to do the same, we empower businesses through innovative digital product development and training.</h4>
            </div>
          </section>
        </section>
        <section class="flex flex-wrap text-white" style="width: 90%; margin: auto">
          <Card
            icon="fe.svg"
            name1="Web"
            name2="Development"
            description="At NotZero Technologies we build carefully crafted websites and web applications that suits your business or that wonderful idea of yours, our web developemnt team consist of great frontend engineers and accessbility specialist bring our business to everyone in the world."
          />
          <Card
            icon="be.svg"
            name1="API/Server Side"
            name2="Development"
            description="Our backend engineers take great pride in building proper server side architecture and software that powers every aspect of your business, giving your business it's scalability and power to suit all your customers need."
          />
          <Card
            icon="mobile.svg"
            name1="Android"
            name2="Applications"
            description="At NotZero Technologies we understand the fact that businesses want to bring solutions to their users as close as possible, at such we have curated some of the best industry android engineer expert to make that happen for you by building wonderful android application that stays on your users phone all the time."
          />
          <Card
            icon="ios2.svg"
            name1="IOS"
            name2="Application"
            description="At NotZero Technologies we understand the fact that businesses want to bring solutions to their users as close as possible, at such we have curated some of the best industry ios engineer expert to make that happen for you by building wonderful ios application that stays on your users phone all the time."
          />
          <Card
            icon="design2.svg"
            name1="UI/UX"
            name2="Design"
            description="Our design thought process over the years has proven to be intuitive and as a startup that is customer centric we design with your customers in mind, thereby providing a solution that suits the needs of your business"
          />
          <Card
            icon="training2.svg"
            name1="Training"
            name2=""
            description="We take pride in building and teaching others how to build great digital product, following industry best practices and taking great engineering process. Our engineers are versitile and experience in their individual domain."
          />
        </section>
        <a name="contactus"></a>
        <section class="contactus xl:p-10 py:10 flex flex-wrap m-10 xl:text-center w-full">
          <div class="w-full xl:text-center xl:p-10 py-10">
            <h3
              class="font-poppins font-extrabold xl:text-4xl text-3xl mb-20 text-primary"
            >We are here for you!</h3>
            <a
              href="mailto:info@notzero.ng?cc=luthfulahi@notzero.ng, sodiqoladeni@notzero.ng&subject=Hello%20from%20NotZero"
              target="_blank"
              class="bg-primaryblue text-white mt-10 hover:bg-yellow-500 font-bold rounded-md xl:px-12 xl:py-5 px-12 py-4"
            >Talk to us 📨!</a>
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
import Card from "~/components/Card";

export default {
  components: {
    Logo,
    Navbar,
    Footer,
    Card
  }
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
.contactus {
  background-attachment: fixed;
  background: url("../assets/img/map.svg");
  background-repeat: no-repeat;
  background-position: center;
}
html {
  scroll-behavior: smooth;
}
.underlinestatus {
  height: 0.02rem;
  width: 10rem;
  background-color: #fff;
  margin: 0.4rem 0;
}
.whiteline {
  min-height: 0.1rem;
  width: 20rem;
  background: white;
}
</style>