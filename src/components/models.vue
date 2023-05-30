<template>
    <div>
        <header-part />
            <div class="modelsList">
                <div class="container">
                    <div class="categorysNameFild">
                        <h2 class="nameCategoryFilter">Name category</h2>
                        <div class="typeSortModelsDropdown">
                            <select  v-model="selectedOption" @change="handleSelection">
                                <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="additionalFiltersModelsBoard">
                        <div class="additionalFiltersFild">
                            <h4 class="filtersTitle">Filter</h4>
                            <div class="filtersBoard">
                                <h5 class="FiltersTitle">Style</h5>
                                <ul class="styleFilterList">
                                    <li class="styleFilters" v-for="style in styles" :key="style.id">
                                        <label class="filtersLabel">
                                        <input class="filtersCheckbox" type="checkbox" v-model="selectedStyle" :value="style.id">
                                        <span class="filterName">{{ style.label }}</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div class="filtersBoard">
                                <h5 class="FiltersTitle">Material</h5>
                                <ul class="materialFilterList">
                                    <li class="materialFilters" v-for="material in materials" :key="material.id">
                                        <label class="filtersLabel">
                                        <input class="filtersCheckbox" type="checkbox" v-model="selectedMaterial" :value="material.id">
                                        <span class="filterName">{{material.label }}</span> 
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div class="filtersBoard">
                                <h5 class="FiltersTitle">Color</h5>
                                <ul class="colorFilterList">
                                    <li class="colorFilters" v-for="color in colors" :key="color.id">
                                        <label class="filtersLabel">
                                        <input class="filtersCheckbox" type="checkbox" v-model="selectedColor" :value="color.id">
                                        <span class="filterName">{{ color.label }}</span> 
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="modelsFild">
                            <ul class="models">
                                <li v-for="(model, index) in models"
                                    :key="index"
                                class="modelsCards">
                                    <model-card 
                                        :img-url="model.imgUrl"
                                        :title="model.title"   
                                        :model-id="model.modelId"
                                    />
                                </li>
                            </ul>
                            <div class="pagenatorContainer">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <footer-part />
    </div>
</template>

<script>
import headerPart from './header.vue';
import footerPart from './footer.vue';
import modelCard from './modelCard.vue';

export default {
    name: 'TheModels',
    components: {headerPart, footerPart, modelCard},
    data() {
        return {
            selectedOption: null,
            options: [
                { label: 'Most popular', value: 'option1' },
                { label: 'Least popular', value: 'option2' },
                { label: 'Cheap first', value: 'option3' },
                { label: 'Expensive first', value: 'option4' }
            ],
            styles: [
                { id: 1, label: 'Classic' },
                { id: 2, label: 'Modern' },
                { id: 3, label: 'Cartoon' },
                { id: 4, label: 'Vintage' }
            ],
            selectedStyle: [],
            materials: [
                { id: 1, label: 'Animal' },
                { id: 2, label: 'Asphalt' },
                { id: 3, label: 'Bricks' },
                { id: 4, label: 'Fabric' },
                { id: 5, label: 'Ground' },
                { id: 6, label: 'Human' },
                { id: 7, label: 'Metal' },
                { id: 8, label: 'Organic' },
                { id: 9, label: 'Plastic' },
                { id: 10, label: 'Rock' },
                { id: 11, label: 'Stone' },
                { id: 12, label: 'Wood' }
            ],
            selectedMaterial: [],
            colors: [
                { id: 1, label: 'White' },
                { id: 2, label: 'Yellow' },
                { id: 3, label: 'Pink' },
                { id: 4, label: 'Grey' },
                { id: 5, label: 'Blue' },
                { id: 6, label: 'Orange' },
                { id: 7, label: 'Black' },
                { id: 8, label: 'Green' },
                { id: 9, label: 'Purpel' },
                { id: 10, label: 'Red' },
                { id: 11, label: 'Brown' },
                { id: 12, label: 'Gold' }
            ],
            selectedColor: [],
            models: [
                            {
                                title: 'Aircraft',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 1,
                            },
                            {
                                title: 'Animal',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 2,
                            },
                            {
                                title: 'Architectural',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 3,
                            },
                            {
                                title: 'Car',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 4,
                            },
                            {
                                title: 'Character',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 5,
                            },
                            {
                                title: 'Exterior',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 6,
                            },
                            {
                                title: 'Food',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 7,
                            },
                            {
                                title: 'Furniture',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 8,
                            },
                            {
                                title: 'Household',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 9,
                            },
                            {
                                title: 'Industrial',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 10,
                            },
                            {
                                title: 'Military',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 11,
                            },
                            {
                                title: 'Plant',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 12,
                            },
                            {
                                title: 'Space',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 13,
                            },
                            {
                                title: 'Vehicle',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 14,
                            },
                            {
                                title: 'Watercraft',
                                imgUrl: require('../assets/categoryFood.png'),
                                modelId: 15,
                            }
                        ],
            
        };
    },

    methods: {
        handleSelection() {
        // Обработка выбора опции
        console.log(this.selectedOption);
        },
        
    },
    computed: {
        
    },
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=M+PLUS+1:wght@600&family=Sarala&family=Satisfy&display=swap');

:root{

    --color-one: #52117d;
    --color-two: #a944ec;
    --color-three: #ffc800;
    --color-accent: #19ff70;
    --color-text: #fffed7;
    --color-bg: #181729;


}


    .modelsList {
        height: 100%;
        padding: 40px 0;
        background-color: #181729;
    }
    .categorysNameFild {
        height: 50px;
        padding: 10px 30px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
        border: 2px solid white;
        border-radius: 10px;
    }
    .nameCategoryFilter {
        color: white;
        font-size: 40px;
    }

    .typeSortModelsDropdown select {
        height: 35px;
        width: 240px;

        background-color: rgba(252, 252, 252, 0);
        
        color: rgb(255, 255, 255);

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: url('../assets/typeSortModelsIcon.svg'); 
        background-repeat: no-repeat;
        background-position: right center;
        background-position-x: calc(100% - 15px);
        padding: 0 20px;
        border-radius: 10px;
        font-size: 20px;
    }

    .typeSortModelsDropdown select option {
        height: 35px;
        border: 2px solid white;
        border-radius: 100px;
        background-color: black;
    }


    .typeSortModelsFilters {
        color: white;
        font-size: 20px;
    }
    .typeSortModelsIcon {
        height: 20px;
        width: 20px;
    }

    .additionalFiltersModelsBoard {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

    }

    .additionalFiltersFild {
        border: 2px solid white;
        border-radius: 10px;
        height: 100%;
        width: 24%;
    }

    .filtersTitle {
        color: white;
        font-size: 25px;
        text-align: center;
        margin: 5px 0px;
    }

    .filtersBoard {
        border-top: 1px solid white;
        padding: 5px;
    }

    .FiltersTitle {
        margin-left: 10px;
        color: white;
        font-size: 20px;
    }

    .styleFilterList {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .materialFilterList {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .colorFilterList {
        display: flex;
        flex-wrap: wrap;
    }


    ul {
        list-style-type: noe;
    }
    li {
        list-style: none;
    }

    .filtersLabel {
        display: inline-flex;
        color: var(--color-text);
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        align-items: center;
        line-height: 1;
        border-radius: 5px;
        padding: 5px 7px 5px 7px;
        user-select: none;

        @media (min-width: 992px) {
            font-size: 12px;
        }

        span {
            position: relative;
            display: flex;
            align-items: center;
        }

        input[type="checkbox"] {
            position: absolute;
            clip: rect(1px, 1px, 1px, 1px);
            padding: 0;
            border: 0;
            height: 1px;
            width: 1px;
            overflow: hidden;

            &:checked + span::after {
                background-color: var(--color-accent);
            }

            &:checked + span {
                color: var(--color-accent);
            }

            &:focus + span::before {
                border-color: var(--color-accent);
            }

            &:disabled {
                opacity: .85;
                & + span {
                    color: #9a9a88;
                }
            }
        }

        span::before {
            content: "";
            display: inline-block;
            border-radius: 3px;
            background-color: #414051;
            margin-right: 8px;
            height: 16px;
            width: 16px;
            border: 1px solid transparent;
        }

        input[type="checkbox"] {
        }

        span::after {
            content: "";
            display: inline-block;
            height: 12px;
            width: 12px;
            border-radius: 3px;
            background-color: transparent;
            left: 3px;
            position: absolute;
        }
    }
       
    .modelsFild {
        width: 75%;
    }

    .models {
        display: flex;
        flex-wrap: wrap;
        padding: 0 1.25%;
    }

    .models li {
        flex: 0 0 30%;
        margin: 0 1.25%;  
        margin-bottom: 1.25%;
    }

    .pagenator {
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0;
    }

    .pagenatorPage {
    margin: 0 5px;
    }

    .pagenatorBtn {
        background-color: #19ff70;
        border: none;
        cursor: pointer;
    }

    .pagenatorBtn:active {
        font-weight: bold;
        background-color: white;
    }
</style>