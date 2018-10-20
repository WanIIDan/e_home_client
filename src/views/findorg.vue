<template>
    <div class="wrap">
        <div id="map"></div>
    </div>
</template>

<script>
    export default {
        methods: {
            initMap() {
                const BMap = window.BMap
                var map = new BMap.Map("map");
                var point1 = new BMap.Point(114.02,32.98);
                map.centerAndZoom(point1, 5);
                map.enableScrollWheelZoom(true);
                map.addControl(new BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_LEFT}));
                var marker = new BMap.Marker(point1); // 创建标注
                map.addOverlay(marker);
                var point2 = new BMap.Point(116.46,39.92);
                var marker = new BMap.Marker(point2); // 创建标注
                map.addOverlay(marker);
            }
        },
        mounted() {
            this.initMap()
        }
    }
</script>

<style scoped>
    .wrap {
        padding-top: 0.9rem;
        width: 100%;
        height: 93.3vh;
    }

    #map {
        width: 100%;
        height: 93.3vh;
    }
</style>