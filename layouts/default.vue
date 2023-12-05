<template>
    <div id="page">
        <div class="blur">

        </div>

        <div id="ham-menu" v-on:click="showSidebar=!showSidebar" v-bind:class="{active:showSidebar}" :style="showSidebar ? openedButtonStyle : closedButtonStyle">

        </div>
        <Sidebar id="sidebar" :style="showSidebar ? openedMenuStyle : closedButtonStyle">

        </Sidebar>
        <div class="main-content">
            <slot />
        </div>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                showSidebar: true,
                openedButtonStyle: {
                    left: "160px"
                }, 
                closedButtonStyle: {
                    left: "10px"
                }, 
                openedMenuStyle: {
                    visibility: "visible",
                },
                closedMenuStyle: {
                    visibility: "hidden"
                }
            }
	    },
        methods: {
            toggleSidebar() {
                this.showSidebar=!this.showSidebar
            }
        }
    }


    // function toggleSideBar(event) {

    //     console.log(this.$refs.sidebar)

    // }



</script>

<style scoped>
#page {
    height: 100%;
}

.blur {
    position: absolute;
    background: linear-gradient(rgba(23, 22, 20, 1) 40%, rgba(23, 22, 20, 0));
    width: 150px;
    height: 30px;
    z-index: 10;
}

#ham-menu {
    position: absolute;
    display: inline-block;
    visibility: hidden;
    top: 10px;
    left: 10px;
    margin-top: 10px;
    z-index: 15;
    width: 40px;
    height: 35px;
    background-color: #171614;
    background-image: url('/ham-menu.svg');
    border: 2px solid #42b883;
    border-radius: 5px;
}

#ham-menu:hover {
    cursor: pointer;
}

#sidebar {
    position: fixed;
    top: 0;
    margin: 0;
    padding: 0;
    width: 150px;
    height: calc(100% + 2px);
    background-color: #171614;
    border-right: 2px solid #42b883;
    z-index: 2;
}

#sidebar::-webkit-scrollbar {
    display: none;
}

.main-content {

    vertical-align: top;
    display: inline-block;
    height: calc(100% + 2px);
    margin: 10px 10px 10px 160px;
    border-top-left-radius: 25px;
    background-color: #f5f0f6;
    z-index: 0;
}

.noHover {
    pointer-events: none;
}

@media (max-width: 700px) {

    #sidebar {
        visibility: hidden;
    }

    .blur {
        visibility: hidden;
    }

    #ham-menu {
        position: sticky;
        visibility: visible;
    }

    .main-content {

        margin: 10px;

    }

}



/* Color Palette */
/*  171614
    CE7919
    42b883
    f5f0f6 
    
    D5E6E3
    B6DDD0
    7BCBA9
    */

</style>