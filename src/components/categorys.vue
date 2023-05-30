<template>
    <div></div>
</template>

<script>

    export default {
        name: 'categorysList',
        data() {
            return {
                categorys: [
                    {
                        title: 'Aircraft 3D Models',
                        imgUrl: require('../assets/categoryPlane.png'),
                        typeId: 1,
                    },
                    {
                        title: 'Animal 3D Models',
                        imgUrl: require('../assets/categoryAnimal.png'),
                        typeId: 2,
                    },
                    {
                        title: 'Architectural 3D Models',
                        imgUrl: require('../assets/categoryArchitectural.png'),
                        typeId: 3,
                    },
                    {
                        title: 'Car 3D Models',
                        imgUrl: require('../assets/categoryCar.png'),
                        typeId: 4,
                    },
                    {
                        title: 'Character 3D Models',
                        imgUrl: require('../assets/categoryCharacter.png'),
                        typeId: 5,
                    },
                    {
                        title: 'Exterior 3D Models',
                        imgUrl: require('../assets/categoryExterior.png'),
                        typeId: 6,
                    },
                    {
                        title: 'Food 3D Models',
                        imgUrl: require('../assets/categoryFood.png'),
                        typeId: 7,
                    },
                    {
                        title: 'Furniture 3D Models',
                        imgUrl: require('../assets/categoryFurniture.png'),
                        typeId: 8,
                    },
                    {
                        title: 'Household 3D Models',
                        imgUrl: require('../assets/categoryHousehold.png'),
                        typeId: 9,
                    },
                    {
                        title: 'Industrial 3D Models',
                        imgUrl: require('../assets/categoryIndastrial.png'),
                        typeId: 10,
                    },
                    {
                        title: 'Military 3D Models',
                        imgUrl: require('../assets/categoryMilitary.png'),
                        typeId: 11,
                    },
                    {
                        title: 'Plant 3D Models',
                        imgUrl: require('../assets/categoryPlant.png'),
                        typeId: 12,
                    },
                    {
                        title: 'Space 3D Models',
                        imgUrl: require('../assets/categorySpace.png'),
                        typeId: 13,
                    },
                    {
                        title: 'Vehicle 3D Models',
                        imgUrl: require('../assets/categoryVehicle.png'),
                        typeId: 14,
                    },
                    {
                        title: 'Watercraft 3D Models',
                        imgUrl: require('../assets/categoryWatercraft.png'),
                        typeId: 15,
                    }
                  ],
            }
        }
    }

</script>