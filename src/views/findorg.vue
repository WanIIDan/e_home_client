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
                
                var marker1 = new BMap.Marker(point1); // 创建标注
                map.addOverlay(marker1);
                var labelOne = new BMap.Label("信息工程学院学生党支部 支部书记：杨鑫 电话：0396-2853187",{
                    offset:new BMap.Size(20,-10),
                    position: point1
                })
                var labelTwo = new BMap.Label("信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032",{
                    offset:new BMap.Size(11,-58),
                    position: point1
                })
                marker1.setLabel(labelOne)

                var point2 = new BMap.Point(116.46,39.92);
                var marker2 = new BMap.Marker(point2); // 创建标注
                var labelThree = new BMap.Label("信息工程学院学生流动党支部 支部书记：高洋 电话：13526395586",{
                    offset:new BMap.Size(10,-30),
                    position: point2
                })
                map.addOverlay(labelTwo)
                map.addOverlay(labelThree)
                map.addOverlay(marker2);
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