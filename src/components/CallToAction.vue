<script>
export default {
    name: "CallToAction",
    data() {
        return {
        };
    },
    methods: {},
    mounted() { },
};
</script>

<template>
    <div class="container">
        <div class="call-title">
            <h2>OUR VALUES</h2>
            <p>Thin Big. Act Bigger</p>

        </div>

        <div class="call-icon">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <i class="fa-solid fa-droplet" style="color: #ffffff;"></i>
                        <h3>clean water</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod nemo recusandae
                            voluptatibus alias id autem ut aspernatur natus iusto explicabo nam obcaecati, veniam sunt est
                            voluptate harum? Sequi, suscipit.</p>
                        <button class="btn btn-primary btn-lg" type="button">Our Mission</button>
                    </div>
                    <div class="col-3">
                        <i class="fa-solid fa-stethoscope" style="color: #ffffff;"></i>
                        <h3>clean water</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod nemo recusandae
                            voluptatibus alias id autem ut aspernatur natus iusto explicabo nam obcaecati, veniam sunt est
                            voluptate harum? Sequi, suscipit.</p>
                        <button class="btn btn-primary btn-lg" type="button">Our Mission</button>
                    </div>
                    <div class="col-3">
                        <i class="fa-solid fa-graduation-cap" style="color: #ffffff;"></i>
                        <h3>clean water</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod nemo recusandae
                            voluptatibus alias id autem ut aspernatur natus iusto explicabo nam obcaecati, veniam sunt est
                            voluptate harum? Sequi, suscipit.</p>
                        <button class="btn btn-primary btn-lg" type="button">Our Mission</button>
                    </div>
                    <div class="col-3">
                        <i class="fa-solid fa-droplet" style="color: #ffffff;"></i>
                        <h3>clean water</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod nemo recusandae
                            voluptatibus alias id autem ut aspernatur natus iusto explicabo nam obcaecati, veniam sunt est
                            voluptate harum? Sequi, suscipit.</p>
                        <button class="btn btn-primary btn-lg" type="button">Our Mission</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/_mixins.scss' as *;

.container {
    background-color: gray;

    .call-title {
        padding: 2rem;
        @include noFlex(center, center, center)
    }

    .call-icon {
        @include flex(center, center, center)
    }
}
</style>