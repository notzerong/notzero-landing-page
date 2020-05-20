<template>
  <div
    class="xl:w-10/10 w-full xl:m-10 xl:p-10 xl:m-5 my-5 p-5 box-border"
    style="border: 1px solid white"
  >
    <section>
      <img :src="require(`../assets/img/${icon}`)" alt="vector" />
      <section class="text-3xl text-primary font-poppins">
        <h3>
          {{name1}}
          <br />
          {{name2}}
        </h3>
      </section>
    </section>
    <span>{{description}}</span>
  </div>
</template>
<script>
export default {
  props: ["icon", "name1", "name2", "description"]
};
</script>