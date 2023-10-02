<template>
  <div>
    <Navbar active="contact" />
    <main class="contact-main">
      <section class="contact">
        <h5 class="hear">We'd love to hear from you</h5>
        <img src="~/assets/img/telephone.png" alt="phone" />
        <h4 class="us">Contact us</h4>
      </section>
      <section class="messagebox">
        <div class="form">
          <form>
            <p>&#128075;</p>
            <p class="hello">Hello, let's get in touch</p>
            <!-- <input type="checkbox" id="btnControl"/> -->
            <!-- <input type="checkbox" id="btnControl"/>
            <label class="btn" for="btnControl"><img src="http://placekitten.com/200/140" id="btnLeft" /></label>-->

            <label for="name">Name</label>
            <br />
            <input type="text" name="name" id required />
            <br />

            <label for="name">Email</label>
            <br />
            <input type="email" name="name" id required />
            <br />

            <label for="name">Reason for contact</label>
            <br />
            <input type="text" name="name" id required />
            <br />

            <label for="name">Message</label>
            <br />
            <input type="text" name="name" id required />
            <br />

            <span type="submit" class="btn">Send Message</span>
          </form>
        </div>
        <div class="schedules">
          <section>
            <h3>Around the area ?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat</p>
          </section>
          <section>
            <h3>Opening hours</h3>
            <p>Monday -Saturday</p>
            <p>9am-7pm</p>
          </section>
          <section>
            <h3>Support</h3>
            <p>
              <a href="mailto:tuvwxyz@gmail.com">tuvwxyz@gmail.com</a>
            </p>
            <p>
              <a href>+2348038325215</a>
            </p>
          </section>
        </div>
      </section>
    </main>
    <Footer active="contact" />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  components: {
    Logo,
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.contact-main {
  background: #19191b;
}

.contact {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #2c2c2c;
  /* background-color: yellow; */
  height: 100vh;
  width: 100vw;
  color: white;
}

.contact .hear {
  justify-self: flex-start;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2.4px;
  color: #ffffff;
}

.contact .us {
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 90px;
  line-height: 112px;
  /* identical to box height, or 124% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
}

.messagebox {
  color: white;
  border: 1px solid white;
  width: 60vw;
  height: 85vh;
  border-radius: 20px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
}

.messagebox .hello {
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #efefef;
  padding-bottom: 1rem;
  opacity: 0.7;
}

.messagebox form label {
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #efefef;
  opacity: 0.7;
  /* padding: 3rem 0; */
}
.form {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.form form {
  /* display: none; */
  margin-top: 2rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.messagebox input {
  /* display: none; */
  margin: 0.7rem 0;
  width: 25vw;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  border-bottom: 1px solid #efefef;
}

.messagebox .btn {
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  align-self: flex-end;
  cursor: pointer;
  position: relative;
  /* margin-left: 20rem; */
  /* margin-bottom: 24rem !important; */
  color: #f2c94c;
  border-bottom: 1px solid whitesmoke;
  opacity: 0.7;
}
.schedules {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
}

.schedules h3 {
  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;

  color: #fdfdfd;

  opacity: 0.7;
}

.schedules p {
  width: 200px;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
}

.schedules section p a {
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  text-decoration: none;
  color: #ffffff;
}
.messagebox input:focus {
  font-size: 2rem;
  font-family: Muli;
  font-style: normal;
  font-weight: 600;
  padding: 10px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  body {
  }
  .contact {
    height: 75vh;
  }

  .contact-main .us {
    font-size: 3rem;
  }

  .messagebox {
    flex-direction: column;
    width: 100vw;
    flex: 1;
    border: none;
  }

  .messagebox .form {
    height: 75vh;
  }

  .messagebox input:focus {
    font-size: 2rem;
  }
}
</style>
