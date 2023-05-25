<template>
  <div>
    <Navbar/>
    <header class="masthead">
      <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div class="d-flex justify-content-center"></div>
      </div>
    </header>
    <section class="about-section text-center" id="about"></section>
    <section class="projects-section bg-light" id="projects">
      <div class="container px-4 px-lg-5">
        <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div class="col-xl-8 col-lg-7">
            <img class="img-fluid mb-3 mb-lg-0" src="https://cdn.discordapp.com/attachments/1088076212594815006/1110586900173050006/pic2.jpg" alt="..." />
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <h4>WOMAN</h4>
              <p class="text-black-50 mb-0">
                Embrace your individuality and express your unique sense of fashion with our diverse range of women's clothing. From bold patterns and vibrant colors to timeless classics and contemporary designs, our collection caters to a wide range of styles and preferences.
              </p>
            </div>
          </div>
        </div>
        <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div class="col-lg-6">
            <img class="img-fluid" src="https://cdn.discordapp.com/attachments/1088076212594815006/1110586914978934984/kidszara.jpg" alt="..." />
          </div>
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-left">
                  <h4 class="text-white">KIDS</h4>
                  <p class="mb-0 text-white-50">
                    Collection of kids' clothes! From playful patterns to vibrant colors, we have everything your little ones need to express their unique style. Our clothes are designed with comfort and durability in mind, ensuring that your kids can play, explore, and create lasting memories in style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row gx-0 justify-content-center">
          <div class="col-lg-6">
            <img class="img-fluid" src="https://cdn.discordapp.com/attachments/1088076212594815006/1110586888814862357/man.jpg" alt="..." />
          </div>
          <div class="col-lg-6 order-lg-first">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div class="project-text w-100 my-auto text-center text-lg-right">
                  <h4 class="text-white">MAN</h4>
                  <p class="mb-0 text-white-50">
                    Discover the perfect blend of style and comfort with our collection of men's clothing. From casual t-shirts and jeans to tailored suits and dress shirts, our range offers versatile options for every occasion. Stay on-trend with our carefully curated selection of men's fashion, designed to elevate your wardrobe and showcase your personal style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="signup-section" id="signup">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-10 col-lg-8 mx-auto text-center">
            <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 class="text-white mb-5">Subscribe to our Newsletter</h2>
            <form class="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div class="row input-group-newsletter">
                <div class="col">
                  <input class="form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" />
                </div>
                <div class="col-auto">
                  <button class="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</button>
                </div>
              </div>
              <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
              <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3 mt-2 text-white">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3 mt-2">Error sending message!</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-section bg-black">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Address</h4>
                <hr class="my-4 mx-auto" />
                <div class="small text-black-50">Elgazala Technopark, Bloc B24, Raoued</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-envelope text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Email</h4>
                <hr class="my-4 mx-auto" />
                <div class="small text-black-50"><a href="#!">ZARA@gmail.com</a></div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Phone</h4>
                <hr class="my-4 mx-auto" />
                <div class="small text-black-50">+1 (555) 902-8832</div>
              </div>
            </div>
          </div>
        </div>
        <div class="social d-flex justify-content-center">
          <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
          <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
          <a class="mx-2" href="#!"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Navbar from './Navbar.vue.js';

export default {
  name: 'Home',
  components:{Navbar},

  data(){
    return{
      showSearch: false
    }
  }


};
</script>

<style scoped>

.masthead{
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Header */
.masthead {
  height: 100vh;
  min-height: 500px;
  background-image: url('../assets/zarahome.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #343a40;
}

/* Sections */
.about-section {
  padding: 80px 0;
}

.projects-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.signup-section {
  padding: 80px 0;
  background-color: #fff;
}

.contact-section {
  padding: 80px 0;
  color: #fff;
}

/* Section headings */
h4 {
  font-size: 24px;
  font-weight: bold;
}

/* Section content */
p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 0;
}

/* Images */
.img-fluid {
  max-width: 100%;
  height: auto;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Cards */
.card {
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Contact information */
.card-body {
  padding: 20px;
  text-align: center;
}

.small {
  font-size: 14px;
  color: #888;
}

/* Social icons */
.social {
  margin-top: 20px;
}

.social a {
  margin: 0 5px;
  color: #fff;
  font-size: 24px;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}

</style>
