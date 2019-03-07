const createBuildsContainer = (type) => {
    const blocks_container = document.getElementById('builds_'+type)
    const blocks = document.getElementsByClassName(type + '_build_block');
    const preloader = `<div class="builds_preloader col-12"><img src="src/img/builds_preloader.gif" alt=""/></div>`
    let metaData = [
        {
            price: 55000,
            metr_price: 1100,
            area: 59,
            photos: ['src/img/build_block_promo.jpg', 'src/img/build_block_promo_2.jpg'],
            floor: 3,
            BC_name: 'Сенатор',
            address: 'Большой проспект П.С., д. 29, корпус тотакто',
            stations: [
                {
                    name: 'Площадь восстания',
                    color: 'red',
                    time_to: 20
                },
                {
                    name: 'Чкаловская',
                    color: 'blue',
                    time_to: 20
                },
                {
                    name: 'Чкаловская',
                    color: 'blue',
                    time_to: 20
                }
            ]
        },
        {
            price: 55000,
            metr_price: 1100,
            area: 59,
            photos: ['src/img/build_block_promo.jpg'],
            floor: 3,
            BC_name: 'Сенатор',
            address: 'Большой проспект П.С., д. 29, корпус тотакто',
            stations: [
                {
                    name: 'Площадь восстания',
                    color: 'red',
                    time_to: 20
                },
                {
                    name: 'Чкаловская',
                    color: 'blue',
                    time_to: 20
                },
                {
                    name: 'Чкаловская',
                    color: 'blue',
                    time_to: 20
                }
            ]
        },
        {
            price: 55000,
            metr_price: 1100,
            area: 59,
            photos: ['src/img/build_block_promo.jpg'],
            floor: 3,
            BC_name: 'Сенатор',
            address: 'Большой проспект П.С., д. 29, корпус тотакто',
            stations: [
                {
                    name: 'Площадь восстания',
                    color: 'red',
                    time_to: 20
                },
                {
                    name: 'Чкаловская',
                    color: 'blue',
                    time_to: 20
                },
                {
                    name: 'Чкаловская',
                    color: 'blue',
                    time_to: 20
                }
            ]
        },
        {
            price: 55000,
            metr_price: 1100,
            area: 59,
            photos: ['src/img/build_block_promo.jpg'],
            floor: 3,
            BC_name: 'Сенатор',
            address: 'Большой проспект П.С., д. 29, корпус тотакто',
            stations: [
                {
                    name: 'Площадь восстания',
                    color: 'red',
                    time_to: 20
                },
                {
                    name: 'Чкаловская',
                    color: 'blue',
                    time_to: 20
                },
                {
                    name: 'Чкаловская',
                    color: 'blue',
                    time_to: 20
                }
            ]
        }
    ]
    //Шаблон блока
    const getBlockContent = (data, block_id) => {
        const photo_navs = data.photos.slice(0,4).map((photo, nav_id) => {
            return data.photos.length > 1 ? `
                <div class='photo_nav_block ${type}_photo_nav_block_${block_id} ${nav_id === 0 ? 'active' : ''}' id='${type}_build_block_photo_nav_${block_id}.${nav_id}'><div class="photo_nav_block_content"></div></div>
            ` : ''
        }).join('')
        const stations = data.stations.slice(0,2).map((station) => {
            return `
                <div class="station">
                    <div class="icon ${station.color}"></div>
                    <div class="station_info">
                        <h5 class="name">${station.name}</h5>
                        <span class="distance">(${station.time_to} минут пешком)</span>
                    </div>
                </div>`
        }).join('')
        return `
        <div class="col-3 box">
            <div class="build_block ${type}_build_block" id="${type}_build_block_${block_id}">
                <div class="photos">
                    <div class="tools">
                        <div class="view">
                            <a href='#rent' id="${type}_build_page_link_${block_id}">
                                <img src="src/img/build_page_icon.png" alt="" class="build_page ${type}_build_page_${block_id}" id="${type}_build_page_icon_${block_id}">
                            </a>
                            <a href='#rent' id="${type}_build_tour_link_${block_id}">
                                <img src="src/img/build_tour_icon.png" alt="" class="build_tour ${type}_build_tour_${block_id}" id="${type}_build_tour_icon_${block_id}">
                            </a>
                        </div>
                        <div class="" id="${type}_build_favorite_link_${block_id}">
                            <img src="src/img/build_favorite_icon.png" alt="" class="build_favorite ${type}_build_favorite_${block_id} ${data.favorite ? 'active' : ''}" id="${type}_build_favorite_icon_${block_id}">
                        </div>
                    </div>
                    <div class="photo_nav">
                        ${photo_navs}
                    </div>
                    <img src="${data.photos[0]}" class="photo" id="${type}_build_block_photo_${block_id}" alt="">
                </div>
                <div class="info">
                    <div class="main">
                        <div class="price">
                            <p>${data.price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} Р</p>
                            <span>${data.metr_price} Р/м²</span>
                        </div>
                        <div class="build_location">
                            <p>${data.area}  м², ${data.floor} этаж, </p>
                            <a href="#advertisements" id="build_bc">БЦ "${data.BC_name}"</a>
                        </div>
                    </div>  
                    <hr>
                    <div class="address">
                        <p>${data.address}</p>
                        <div class="metro">
                            ${stations}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    const initBlock = (block_id) => {
        const changePhoto = (block_id, nav_id, nav_element) => {
            const photo = document.getElementById(`${type}_build_block_photo_${block_id}`)
            photo.setAttribute('src', metaData[block_id].photos[nav_id])
            const  nav_elements = document.getElementsByClassName(`${type}_photo_nav_block_${block_id}`)
            for (let i = 0; i < nav_elements.length; i++) {
                const nav_classes = nav_elements[i].classList;
                if (nav_id === i) {
                    nav_classes.add('active')
                } else if (nav_classes.contains('active')) {
                    nav_classes.remove('active')
                }
            }
        }
        const initNavButtons = () => {
            const photos_length = metaData[block_id].photos.slice(0,4).length
            if (photos_length > 1) {
                for (let nav_id = 0; nav_id < photos_length; nav_id++) {
                    let nav_button = document.getElementById(`${type}_build_block_photo_nav_${block_id}.${nav_id}`)
                    nav_button.addEventListener('mouseenter', (e) => changePhoto(block_id, nav_id, e.target))
                }
            }
        }
        const initTools = () => {
            // const tour = document.getElementById(`${type}_build_tour_${block_id}`)
            // const favorite = document.getElementById(`${type}_build_favorite_${block_id}`)
            const initPage = () => {
                const page_link = document.getElementById(`${type}_build_page_link_${block_id}`)
                const page_icon = document.getElementById(`${type}_build_page_icon_${block_id}`)
                page_link.addEventListener('mouseenter', (e) => {
                    e.target.classList.add('hovered')
                    page_icon.setAttribute('src', 'src/img/build_page_icon-active.png')
                })
                page_link.addEventListener('mouseout', (e) => {
                    e.target.classList.add('hovered')
                    page_icon.setAttribute('src', 'src/img/build_page_icon.png')
                })
            }
            const initTour = () => {
                const tour_link = document.getElementById(`${type}_build_tour_link_${block_id}`)
                const tour_icon = document.getElementById(`${type}_build_tour_icon_${block_id}`)
                tour_link.addEventListener('mouseenter', (e) => {
                    e.target.classList.add('hovered')
                    tour_icon.setAttribute('src', 'src/img/build_tour_icon-active.png')
                })
                tour_link.addEventListener('mouseout', (e) => {
                    e.target.classList.add('hovered')
                    tour_icon.setAttribute('src', 'src/img/build_tour_icon.png')
                })
            }
            const initFavorite = () => {
                const favorite_link = document.getElementById(`${type}_build_favorite_link_${block_id}`)
                const favorite_icon = document.getElementById(`${type}_build_favorite_icon_${block_id}`)
                favorite_icon.addEventListener('mouseenter', (e) => {
                    favorite_icon.setAttribute('src', 'src/img/build_favorite_icon-active.png')
                })
                favorite_icon.addEventListener('mouseout', (e) => {
                    if (!favorite_icon.classList.contains('active')) {
                        favorite_icon.setAttribute('src', 'src/img/build_favorite_icon.png')
                    }
                })
                favorite_icon.addEventListener('click', (e) => {
                    if (!favorite_icon.classList.contains('active')) {
                        favorite_icon.classList.add('active')
                        //TODO Добавить функцию для сохранения состояния
                    } else {
                        favorite_icon.classList.remove('active')
                        //TODO Добавить функцию для сохранения состояния
                    }
                })
            }
            initPage()
            initTour()
            initFavorite()
        }
        initTools()
        initNavButtons()
        // const block = document.getElementById(`${type}_build_block_${block_id}`)

    }
    const initRadioButtons = () => {
        let radio_buttons = document.getElementsByClassName(type + '_radio_button')
        for (let i = 0; i < radio_buttons.length; i++) {
            let elem = radio_buttons[i]
            elem.addEventListener('click', (e) => {
                getContainerContent()
            })
        }
    }
    const getContainerContent = (id) => {
        return new Promise((resolve) => {
            blocks_container.innerHTML = preloader;
            setTimeout(() => {
                if (metaData.length > 0) {
                    blocks_container.innerHTML = metaData.map((block_data, index) => getBlockContent(block_data, index)).join('')
                }
                resolve()
            }, 1000)
        })
        .then(() => {
            initRadioButtons();
            for (let i = 0; i < blocks.length; i++) {
                initBlock(i)
            }
        })
    }
    getContainerContent()
}

export default createBuildsContainer