<template>
  <footer :class="{'footer-bg-two' : active !== 'home'}" class="footer">
    <section class="footerWrapper">
      <div>
        <span>
          <img src="~/assets/img/logo2.png" alt="notzero logo" />
        </span>
        <address class="address">
          (234) 814 764 8756
          20, Aragabnigbi, Lekki Phase 1, Lagos, Nigeria
          info@notzero.com
        </address>
      </div>
      <div>
        <h3>company</h3>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h3>company</h3>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </section>
    <section class="copyright">
      <p>2020 &copy; NotZero</p>
      <div class="z">
        <a href>Terms</a>
        <a href>Privacy</a>
        <a href="mailto: ">info@notzero.com</a>
      </div>
      <div class="media">
        <a href>
          <i class="fa-fas-instagram"></i>
        </a>
        <a href>
          <i class="fa-fas-twitte"></i>
        </a>
        <a href>
          <i class="fa-fas-facebook"></i>
        </a>
        <a href>
          <i class="fa-fas-facebook"></i>
        </a>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  props: ["active"]
};
</script>
<style scoped>
.footer {
  /* background-color: #19191b; */
  justify-content: center;
  flex-direction: column;
}
.footer-bg-one {
  background-color: #000;
}
.footer-bg-two {
  background-color: #19191b;
}
.footer .footerWrapper .address {
  width: 150px;
  margin: 1rem 0;
  font-family: Muli;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* line-height: 10px; */

  color: rgba(255, 255, 255, 0.6);
}
.footer .footerWrapper {
  display: flex;
  /* border: 1px solid red; */
  width: 75vw;
  height: 25vh;
  justify-content: space-around;
  margin: 0 auto;
}

.footer .footerWrapper div h3 {
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: capitalize;
}

.footer .footerWrapper div ul li {
  list-style: none;
  margin: 1rem 0;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.6);
}

.footer .copyright {
  width: 65vw;
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;
  color: white;
  height: 15vh;
}

.footer .copyright .z a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .footer .footerWrapper {
    flex-direction: column;
    height: 100vh;
  }
  .footer .copyright {
    width: 100vw;
    height: 15vh;
  }
}
</style>
