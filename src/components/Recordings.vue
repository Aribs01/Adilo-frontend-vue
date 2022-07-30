<template>
<AppTopBar/>
    
<div class="layout-main-container recording-page">
    <div class="layout-main">
    <div class="recording-screen">
        <div class="recording-screen-text-container">
            <div class="recording-sign">
                <div class="recording-sign-inner"></div>
            </div>
            <span class="recording-screen-text">Live Preview...</span>
        </div>
        <div class="recording-page-button">
            <button class="actual-button" disabled>Start Recording</button>
        </div>
    </div>
    </div>
</div>

</template>

<script>
import AppTopBar from '../AppTopbar.vue';

export default {
    components: {
        'AppTopBar': AppTopBar
    }
}
</script>

<style>
  @import './Recordings.scss';
</style>