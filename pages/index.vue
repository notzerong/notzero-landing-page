<template>
  <div>
    <Navbar />
    <main class="main" style="background-color: #19191b;">
      <section class="we">
        <div class="pointers">
          <span class="point"></span>
          <span class="point1"></span>
          <span class="point2"></span>
          <span class="point3"></span>
        </div>
        <div class="design">
          <h3 class="a">We design and build Digital</h3>
          <h4 class="b">Experiences</h4>
          <h5 class="c">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra quis facilisis sed urna. Id et et donec erat. Nunc nulla est amet, morbi pellentesque. In aliquet dolor purus congue in. Id sed duis neque tellus quam cras nulla.
          </h5>
          <button class="d"> Learn More </button>
        </div>
        <div class="headerImg">
          <img src="~/assets/img/header img.png" alt="screens" class="headImg">
        </div>
      </section>
      <section >
        <section class="whoweare">
          <div class="dots">
            <span class="dot1"></span>
            <span class="dot2"></span>
            <span class="dot3"></span>
            <span class="dot4"></span>
          </div>
          <div class="who">
            <div class="whiteline"></div>
            <h3 class="we1">
              who we are
            </h3>
            <div class="whiteline"></div>
            <h4 class="are">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dolor montes, vel, cursus integer. Malesuada erat amet sed eleifend id risus feugiat. Risus, id suspendisse sit leo. Sit tristique dictum est in et.
            </h4>
          </div>
          <div class="behind">
            <section class="scenes">
          <span class="play">
            <img src="~/assets/img/Frame.png" alt="play icon" >
            <span>see behind the scenes</span>
          </span>
              <section class="projects">
                <div>
                  <p class="numb">500+</p>
                  <p class="status">completed Projects</p>
                  <div class="underlinestatus"></div>
                  <p class="statustext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tincidunt integer.</p>
                </div>
                <div>
                  <p class="numb">200+</p>
                  <p class="status">completed Projects</p>
                  <div class="underlinestatus"></div>
                  <p class="statustext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tincidunt integer.</p>
                </div>
                <div>
                  <p class="numb">80+</p>
                  <p class="status">completed Projects</p>
                  <div class="underlinestatus"></div>
                  <p class="statustext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim tincidunt integer.</p>
                </div>
              </section>
            </section>
            <section class="team">
              <img src="~/assets/img/who we are.png" alt="team" srcset="">
            </section>
          </div>
        </section>
        <section class="whatwedo">
          <div class="p">
            <span class="p0"></span>
            <span class="p1"></span>
            <span class="p2"></span>
            <span class="p3"></span>
          </div>
          <div class="border"></div>
          <div class="e">
            <h3 class="f">What we do</h3>
          </div>
          <div class="border"></div>
          <h4 class="g">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dolor montes, vel, cursus integer. Malesuada erat amet sed eleifend id risus feugiat. Risus, id suspendisse sit leo. Sit tristique dictum est in et.
          </h4>

          <section class="h">
            <div class="i" style="border-right: 1px solid white">
              <section>
                <img src="~/assets/img/Vector.png" alt="vector" style="width: 30px; height: 30px">
                <section class="stack">
                  <h3>Front-end </h3>
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
                <img src="~/assets/img/Vector.png" alt="vector" style="width: 30px; height: 30px">
                <section class="stack">
                  <h3>Front-end </h3>
                  <h3>Development</h3>
                </section>
              </section>
              <span class="j">
            <span class="k" style="width: 35px; height: 19px; background-color: aliceblue;"></span>
            We build brilliant digital products and teach others to do the same. As a leading web design and digital marketing company in Nigeria. We’ve helped hundreds of businesses achieve success. Find out what we.
          </span>
            </div>
            <div class="i" >
              <section>
                <img src="~/assets/img/Vector.png" alt="vector" style="width: 30px; height: 30px">
                <section class="stack">
                  <h3> Back-end </h3>
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
      </section>
    </main>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Navbar from "~/components/Navbar";

export default {
  components: {
    Logo,
    Navbar
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
.header {
  background: #2c2c2c;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  flex: 1;
  width: 100vw
  /* border: 1px solid red; */
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
.pointers {
  position: absolute;
  top: 17rem;
  left: 4rem;
}

.point {
  width: 11px;
  height: 11px;
  background: #f2c94c;
  border-radius: 50px;
  position: absolute;
  left: -2px;
}
.point1 {
  width: 5px;
  height: 5px;
  background: lightgrey;
  border-radius: 50px;
  position: absolute;
  top: 25px;
}
.point2 {
  width: 5px;
  height: 5px;
  background: lightgrey;
  border-radius: 50%;
  position: absolute;
  top: 45px;
}
.point3 {
  width: 5px;
  height: 5px;
  background: lightgrey;
  border-radius: 50px;
  position: absolute;
  top: 70px;
}
.design {
  width: 450px;
  position: relative;
  left: 15rem;
  top: 9rem;
}
.a {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 23px;
  color: #fff;
}

.b {
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 90px;
  line-height: 135px;
  letter-spacing: 0.02em;
  color: #f2c94c;
}
.c {
  font-family: Muli;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
}
.d {
  background: #ffffff;
  border-radius: 8px;
  margin-top: 1rem;
  outline: none;
  border: none;
  width: 10rem;
  height: 4rem;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 28px;
  cursor: pointer;
  color: #000000;
}
.headerImg {
  margin-top: 3rem;
  margin-left: 7rem;
}

.whoweare {
  padding: 3rem 0;

;
}
.whiteline {
  min-height: 0.1rem;
  width: 20rem;
  background: white;
  margin: 0.5rem 15rem;
}
.whoweare .dots {

  height: 150px;
  width: 150px;
  position: absolute;
  right: 0;
  margin-top:14rem
}

.whoweare .dot1 {
  height:5px;
  width: 5px;
  background-color: grey;
  position: absolute;
  border-radius: 50px;
  right: 3rem;
  top:15px
}

.whoweare .dot2{
  height: 10px;
  width: 10px;
  background-color: #f2c94c;
  position: absolute;
  border-radius:50px;
  right: 2.9rem;
  top: 35px
}
.whoweare .dot3{
  height: 5px;
  width: 5px;
  background-color: grey;
  position: absolute;
  border-radius:50px;
  right: 3rem;
  top: 55px
}
.whoweare .dot4{
  height: 5px;
  width: 5px;
  background-color: grey;
  position: absolute;
  border-radius:50px;
  right: 3rem;
  top: 75px
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
  justify-content: end;
  margin-left: 17rem
}
.main .behind .scenes {
}
.main .behind .scenes .play {
  display: flex;
  align-items: center;
  background: #1f1f24;
  box-shadow: 0px 0px 5px rgba(184, 184, 184, 0.15);
  border-radius: 20px;
  width: 20rem;
  cursor: pointer;
  margin-top: 2rem
}

.main .behind .scenes .projects {
  color: white;
  display: flex;
  /* border: 1px solid yellowgreen; */
  width: 40vw;
  margin: 1.5rem  3rem;
}
.main .scenes .projects div{
  margin: 0 1rem
}
.main .behind .scenes .projects .numb{
  font-family: Muli;
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 75px;

  color: #FCD230;
}

.main .behind .scenes .projects .status {
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
  text-transform: capitalize;
}

.main .behind .scenes .projects .statustext {
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
}

.main .behind .scenes .projects  .underlinestatus {
  height: 0.02rem;
  width: 10rem;
  background-color: #fff;
  margin: 0.4rem 0;
}

.main .behind  .team {
  position:  relative;
  right: 7rem;
  bottom: 5rem;

}

.main .behind .scenes .play span {
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
.main .whatwedo .p{
  height: 150px;
  width: 150px;
  position: absolute;
  right: 0 ;
  top: 22rem
}

.p0{
  height: 5px;
  width:5px ;
  background-color: grey;
  position: absolute;
  right: 3rem;
  border-radius: 50px;
}
.p1{
  height: 5px;
  width:5px ;
  background-color: grey;
  position: absolute;
  right: 3rem;
  border-radius: 50px;
  top: 15px
}
.p3{
  height: 5px;
  width:5px ;
  background-color: grey;
  position: absolute;
  right: 3rem;
  border-radius: 50px;
  top: 48px
}
.p2{
  height: 10px;
  width:10px ;
  background-color: #FCD230;
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
  line-height: 73px;
  /* identical to box height */
  display: flex;
  justify-content: flex-end;
  margin-right: 8rem;
  text-transform: capitalize;
  color: #FFFFFF;


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
  padding:2rem 0;


}
.main .whatwedo .h  {
  display: flex;
  justify-content: center;
  width:75vw;
  height:40vh;
  margin-left: 12rem;
  border: 1px solid white;
  margin-top: 2rem;

}
.main .whatwedo .i {
  padding:2rem
}
.main .whatwedo  .i section{
  display: flex;
  padding-bottom: 1rem;
;
}
.i .stack {
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left:1rem;
  height: max-content

}

.main  .h   .j {
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  margin-top: 314px !important;
  color: #FFFFFF;
}

.main .h .j span {
  height: 0.5rem !important;
  width: 2rem !important;
  background-color: #fff;
}

.main .i .k {
  height: 5px;
  width:34px
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  body {

  }
  .logo {
    margin-left: 0 !important;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
  }
  .nav {
    display: none;
  }
  .hamburger {
    display: inline-block;
  }
  .main {
    display: block;
  }
  .main .we {
    height: 65vh
  }
  .main .we .pointers,
  .main .we .headerImg {
    display: none;
  }
  .main .we .design {
    left: 10px;
    top: 4.5rem;
  }
  .main .we .design .a {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 13px;
    color: white;
  }

  .we .design .b {
    font-family: Poppins;
    font-style: normal;
    font-weight: bolder;
    font-size: 60px;
    line-height: 95px;
    letter-spacing: 0.02em;
    color: #1a73e8;
  }
  .we .design .c {
    font-family: Muli;
    width: 350px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: white;
  }
  .main .whoweare {
    display: block;
    font-size: 34px;
  }
  .main .whoweare .dots{
    display: none;
  }
  .main .whoweare .who .we1 {
    margin: 0 10px;
    font-size:2.5rem
  }
  .main .whoweare .who .whiteline {
    display: none;
  }

  .main .whoweare .who .are {
    margin: 1rem 20px;
    width: 95vw;
    /* border: 1px solid red */
  }

  .main .whoweare .behind{
    display: flex;
    margin:0
  }



  .main .whoweare .behind .scenes .play {
    display: flex;;
    border: 1px solid #FCD230;
    margin: 0 2rem
  }

  .main .whoweare .behind .projects {
    display: block;
    width: 75vw;
    margin: 1rem auto;
    /* border:  1px solid rgb(204, 204, 204); */
  }

  .main .whoweare .behind .projects .statustext {
    width:65vw;
    font-size: 1.5rem;
    line-height:23px
  }
  .main .whoweare .team{
    display: none;
  }

  .main .whatwedo .p, .main .whatwedo .p {
    display: none;
  }
  .main .whatwedo .e {

    width:95vw;
    font-size: 2rem;
    margin: 0
  }
  .main .whatwedo .g {
    margin:0;
    width: 45vh;
    line-height:23px;
    font-size: 1.2rem;
  }
  .main .whatwedo .h {
    display: flex;
    flex-direction: column;
    border:none;
    height: max-content;
    margin: 1rem auto;
    width: 90vw;
    justify-content: center;

  }
}

</style>
