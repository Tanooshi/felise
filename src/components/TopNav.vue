
<template>
    <nav class="navbar">
        <a class="brand-name" href="/">felise</a>
        <div>
            <ul class="nav-menu" :class="showMenu ? 'active' : ''">
                <li class="nav-link ">
                    <a href="/#about-us">About Us</a>

                </li>
                <li class="nav-link ">
                    <a href="/#properties">Properties</a>

                </li>
                <li class="nav-link ">
                    <a href="/#contact">Contact</a>

                </li>
                <li class="nav-link ">
                    <a href="/#testimonials">Testimonials</a>

                </li>

            </ul>
        </div>

        <div v-on:click="toggleMenu()" class="hamburger" :class="showMenu ? 'active' : ''">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },

    },
};
</script>
  