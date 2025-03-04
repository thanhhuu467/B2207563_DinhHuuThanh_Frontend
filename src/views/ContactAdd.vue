<template>
  <div class="page">
    <h4>Thêm Liên hệ Mới</h4>
    <ContactForm :contact="initialContact" @submit:contact="addContact" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactFormAdd.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      initialContact: {
        name: "",
        email: "",
        address: "",
        phone: "",
        favorite: false,
      },
      message: "",
    };
  },
  methods: {
    async addContact(data) {
      try {
        await ContactService.create(data);
        alert("Liên hệ được thêm thành công.");
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.log(error);
        this.message = "Có lỗi xảy ra lỗi khi thêm liên hệ.";
      }
    },
  },
};
</script>

<style scoped>
.page {
  max-width: 400px;
  margin: auto;
}
</style>