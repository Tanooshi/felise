<template>
    <div class="properties-section">
        <h2 class="heading">All Your <br> Dream Properties</h2>
        <div class="properties-cards" v-if="!showMore">

            <div class="card" v-for="property in properties.slice(0, 3)" :key="property">
                <div class="image">
                    <img :src="require(`../assets/img/5Properties/${property.img}`)" alt="">
                </div>

                <div class="card-footer">
                    <p class="price">{{ property.price }}</p>
                    <h3 class="title">{{ property.name }}</h3>
                    <button class="primary-btn">Schedule Tour</button>
                </div>
            </div>

        </div>
        <div class="properties-cards" v-else>

            <div class="card" v-for="property in properties" :key="property">
                <div class="image">
                    <img :src="require(`../assets/img/5Properties/${property.img}`)" alt="">
                </div>

                <div class="card-footer">
                    <p class="price">{{ property.price }}</p>
                    <h3 class="title">{{ property.name }}</h3>
                    <button class="primary-btn">Schedule Tour</button>
                </div>
            </div>

        </div>
        <button v-if="!showMore" @click="showMore = !showMore" class="view-more-btn">View More Listings</button>
        <button v-else @click="showMore = !showMore" class="view-more-btn">Show Less</button>
    </div>
</template>
<script>
import properties from '../assets/data/properties.json'

export default {
    data() {
        return {
            properties,
            showMore: false
        }
    },

}
</script>