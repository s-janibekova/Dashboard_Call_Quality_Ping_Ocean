<template>
    <div class="d-flex">
        <div class="title">
            <h1>PingOcean</h1>
        </div>
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                     <div class="flex">
                        <span slot="button-content">
                                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                                        <i class="pe-7s-bell"></i>
                                </div>
                            </span>
                        </div>
                    <div class="flex">
                        <span slot="button-content">
                            <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                                <i style="fill:black" class="pe-7s-comment"></i>
                            </div>
                            </span>
                        </div>
                    <div class="widget-content-left">
                        <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-lg" variant="link" no-caret right>
                            <span slot="button-content">
                                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                                     <i class="pe-7s-user"></i>
                                </div>
                            </span>
                            <div class="dropdown-menu-header">
                                <div class="dropdown-menu-header-inner bg-info">
                                    <div class="menu-header-image opacity-2 dd-header-bg-6"></div>
                                    <div class="menu-header-content text-left">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left mr-3">
                                                    <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt="">
                                                </div>
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">EMail</div>
                                                    <div class="widget-subheading opacity-8">ФИО</div>                                      
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="scroll-area-xs" style="height: 150px;">
                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                    <li class="list-group-item list-group-item-action">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">
                                                           <i class="pe-7s-users"></i>
                                                       Пользователи  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                             <li class="list-group-item list-group-item-action">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">
                                                           <i class="pe-7s-cash"></i>
                                                      Finance       
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                        <li class="list-group-item list-group-item-action">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left flex2">
                                                <div class="widget-heading">
                                                    <i class="pe-7s-mail"></i>
                                                        Tickets
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                </VuePerfectScrollbar>
                            </div>
                        </b-dropdown>
                    </div>   
                </div>
            </div>
        </div>
     <div class="d-flex">
         
    </div>
    
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'


    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
    } from '@fortawesome/free-solid-svg-icons'


    library.add(
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
    );

    export default {
        components: {
            VuePerfectScrollbar,
        },
        data: () => ({
            fill1: {gradient: ["#00b09b", "#96c93d"]},
            fill2: {gradient: ["#ff0844", "#ffb199"]},
            fill3: {gradient: ["#f6d365", "#fda085"]},
            showDrawerSection: false,
        }),

        methods: {}
    }


</script>
