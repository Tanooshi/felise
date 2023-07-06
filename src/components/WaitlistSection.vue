<template>
    <div class="waitlist-section">
        <div class="text-container">
            <h3 class="heading">Join Our Growing family who loves felise.</h3>
            <div class=" about-numbers" v-observe-visibility="{
                callback: visibilityChanged,
                once: false,
            }">
                <div>
                    <p class="count">{{ num1 }}</p>
                    <p class="label">Satisfied clients all around the globe</p>
                </div>
                <div>
                    <p class="count">{{ num2 }}+</p>
                    <p class="label">Property sale in the market</p>
                </div>
                <div>
                    <p class="count">{{ num3 }}</p>
                    <p class="label">Client Satisfaction</p>
                </div>

            </div>
            <div class="primary-btn">Join Waitlist</div>
        </div>
        <div class="waitlist-img">
            <img src="../assets/img/6Email/img-group-meeting.png" alt="">
        </div>

    </div>
</template>
<script>

export default {
    data() {
        return {
            num1: '',
            num2: '',
            num3: '',
            i: 0,
            j: 0,
            k: 0
        }

    },

    methods: {
        visibilityChanged(isVisible) {
            if (isVisible) {
                this.setCount1()
                this.setCount2()
                this.setCount3()
            } else {
                this.reset()

            }

        },
        setCount1() {
            if (this.i <= 50) {
                if (this.i < 50) {
                    setTimeout(() => {
                        this.i++
                        this.num1 = this.i + 'k'
                        this.setCount1()
                    }, 25)
                } else {
                    this.num1 = '4M'
                }
            }
        },
        setCount2() {


            if (this.j <= 50) {
                if (this.j < 50) {
                    setTimeout(() => {
                        this.j++
                        this.num2 = this.j + 'M'
                        this.setCount2()
                    }, 25)
                } else {
                    this.num2 = '30B'
                }
            }

        },
        setCount3() {
            if (this.j <= 50) {
                if (this.j < 50) {
                    setTimeout(() => {
                        this.j++
                        this.num3 = this.j + '%'
                        this.setCount3()
                    }, 60)
                } else {
                    this.num3 = '95%'
                }
            }
        },
        reset() {
            this.num1 = 0;
            this.num2 = '0'
            this.num3 = "0"
            this.j = 0
            this.i = 0
        }
    }

}
</script>