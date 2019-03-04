console.log('builds works')
const createBuildsContainer = (type) => {
    const blocks_container = document.getElementById('builds_'+type)
    const blocks = document.getElementsByClassName('type_build_block');
    const metaData = [
        {
            price: 55000,
            metr_price: 1100,
            area: 59,
            photos: ['src/img/build_block_promo.jpg', 'src/img/build_block_promo.jpg'],
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
    
    const getBlockMarkup = (data, index) => {
        const photo_navs = data.photos.splice(0,4).map((index) => {
            return `
                <div class='photo_nav_block' id='${type}_build_block_photo_nav_${index}'></div>
            `
        }).join('')
        const stations = data.stations.splice(0,2).map((station) => {
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
            <div class="build_block" id="${type}_build_block_${index}">
                <div class="photos">
                    <div class="photo_nav">
                        ${photo_navs}
                    </div>
                    <img src="src/img/build_block_promo.jpg" class="photo" alt="">
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
    const getNewContainerContent = () => {
        return metaData.map((block_data, index) => getBlockMarkup(block_data, index)).join('')
    }
    blocks_container.innerHTML = getNewContainerContent()
}

export default createBuildsContainer