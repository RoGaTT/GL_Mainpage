const createFastSearchContainer = (type) => {
    let metaData = [
        {
            name: "По параметрам",
            content: [
                {url:"#main_fast_search", text:"Бизнес-центры класса А"},
                {url:"#main_fast_search", text:"Бизнес-центры класса В+"},
                {url:"#main_fast_search", text:"Бизнес-центры класса В"},
                {url:"#main_fast_search", text:"Бизнес-центры класса С"},
                {url:"#main_fast_search", text:"Самые дешёвые"},
                {url:"#main_fast_search", text:"Самые популярные"}
            ]
        },
        {
            name: "По площади",
            content: [
                {url:"#main_fast_search", text:"Офисы до 25"},
                {url:"#main_fast_search", text:"Офисы от 25 м² до 50"},
                {url:"#main_fast_search", text:"Офисы от 50 м² до 100"},
                {url:"#main_fast_search", text:"Офисы от 100 м² до 150"},
                {url:"#main_fast_search", text:"Офисы от 150 м² до 200 м²"},
                {url:"#main_fast_search", text:"Офисы от 200 м² до 250 м²"},
                {url:"#main_fast_search", text:"Офисы до 25"},
                {url:"#main_fast_search", text:"Офисы от 25 м² до 50"},
                {url:"#main_fast_search", text:"Офисы от 50 м² до 100"},
                {url:"#main_fast_search", text:"Офисы от 100 м² до 150"},
                {url:"#main_fast_search", text:"Офисы от 150 м² до 200 м²"},
                {url:"#main_fast_search", text:"Офисы до 25"},
                {url:"#main_fast_search", text:"Офисы от 25 м² до 50"},
                {url:"#main_fast_search", text:"Офисы от 50 м² до 100"},
                {url:"#main_fast_search", text:"Офисы от 100 м² до 150"},
                {url:"#main_fast_search", text:"Офисы от 150 м² до 200 м²"},
                {url:"#main_fast_search", text:"Офисы от 200 м² до 250 м²"},
                {url:"#main_fast_search", text:"Офисы до 25"},
                {url:"#main_fast_search", text:"Офисы от 25 м² до 50"},
                {url:"#main_fast_search", text:"Офисы от 50 м² до 100"},
                {url:"#main_fast_search", text:"Офисы от 100 м² до 150"},
                {url:"#main_fast_search", text:"Офисы от 150 м² до 200 м²"},
                {url:"#main_fast_search", text:"Офисы от 200 м² до 250 м²"},
                {url:"#main_fast_search", text:"Офисы до 25"},
                {url:"#main_fast_search", text:"Офисы от 25 м² до 50"},
                {url:"#main_fast_search", text:"Офисы от 50 м² до 100"},
                {url:"#main_fast_search", text:"Офисы от 100 м² до 150"},
                {url:"#main_fast_search", text:"Офисы от 150 м² до 200 м²"},
                {url:"#main_fast_search", text:"Офисы до 25"},
                {url:"#main_fast_search", text:"Офисы от 25 м² до 50"},
                {url:"#main_fast_search", text:"Офисы от 50 м² до 100"},
                {url:"#main_fast_search", text:"Офисы от 100 м² до 150"},
                {url:"#main_fast_search", text:"Офисы от 150 м² до 200 м²"},
            ]
        },
        {
            name: "По ставке",
            content: [
                {url:"#main_fast_search", text:"Офисы до 400 руб/м²"},
                {url:"#main_fast_search", text:"Офисы от 400 до 500 руб/м²"},
                {url:"#main_fast_search", text:"Офисы от 500 до 600 руб/м²"},
                {url:"#main_fast_search", text:"Офисы от 600 до 700 руб/м²"},
                {url:"#main_fast_search", text:"Офисы от 700 до 800 руб/м²"},
                {url:"#main_fast_search", text:"Офисы от 800 до 900 руб/м²"}
            ]
        },
        {
            name: "По метро",
            type: "station",
            content: [
                {
                    text: "Автово",
                    url: "#main_fast_search",
                    color: "red"
                },
                {
                    text: "Адмиралтейская",
                    url: "#main_fast_search",
                    color: "purple"
                },
                {
                    text: "Академическая",
                    url: "#main_fast_search",
                    color: "red"
                },
                {
                    text: "Балтийская",
                    url: "#main_fast_search",
                    color: "red"
                },
                {
                    text: "Бухарестская",
                    url: "#main_fast_search",
                    color: "purple"
                },
                {
                    text: "Василеостровская",
                    url: "#main_fast_search",
                    color: "green"
                },
            ]
        },
        {
            name: "По метро",
            type: "station",
            content: [
                {
                    text: "Автово",
                    url: "#main_fast_search",
                    color: "red"
                },
                {
                    text: "Адмиралтейская",
                    url: "#main_fast_search",
                    color: "purple"
                },
                {
                    text: "Академическая",
                    url: "#main_fast_search",
                    color: "red"
                },
                {
                    text: "Балтийская",
                    url: "#main_fast_search",
                    color: "red"
                },
                {
                    text: "Бухарестская",
                    url: "#main_fast_search",
                    color: "purple"
                },
                {
                    text: "Василеостровская",
                    url: "#main_fast_search",
                    color: "green"
                },
            ]
        },
    ]
    // const getData;
    const getContainerContent = () => {
        //Видимые колонки
        const visibleContainer = $('.fast_search_content')
        visibleContainer.html(metaData.map((data, index) => {
            return `
                <div class="filter_column">
                    <div class="filter_column_title">${data.name}</div>
                    <div class="filter_column_content ${data.type === 'station' ? 'metro' : ''}">
                        ${data.type !== 'station' ? data.content.slice(0,6).map((elem, index) => {
                            return `
                            <a href="${elem.url}" class="filter_column_content_type">
                                ${elem.text}
                            </a>
                            `
                        }).join('') : 
                        data.content.slice(0.6).map((station, index) => {
                            return `
                                <a href="${station.url}" class="filter_column_content_type filter_column_content_station">
                                    <div class="icon ${station.color}"></div>
                                    <span class="name">${station.text}</span>
                                </a>
                            `
                        }).join('')
                    }
                    </div>
                </div>
            `
        }).join(''))
        //Скрытые поля
    }
    const initRadioButtons = () => {
        const radio_buttons = $('.fast_search_radio_button')
        radio_buttons.on('change', (e) => {
            getContainerContent()
            initRadioButtons()
            initShowMoreButtons()
        })
    }
    const changeShowMore = (filterId = 0) => {
        const hiddenContainer = $('.fast_search_more_content')
        let resultArr = [];
        const content = metaData[filterId].content;
        const size = metaData.length;
        for (let i = 0; i < Math.ceil(content.length / size); i++) {
            resultArr.push(content.slice((i*size), (i*size) + size))
        }
        resultArr = resultArr.map((kit, index) => {
            return `
                <div class="fast_search_more_content_row">
                    ${kit.map((field) => {
                        return `
                            <a href="${field.url}">${field.text}</a>
                        `
                    }).join('')}
                </div>
            `
        })
        hiddenContainer.addClass('active')
        hiddenContainer.html(resultArr.join(''))      
    }
    const initShowMoreButtons = () => {
        const getContent = () => {
            const showMoreContainer = $(".fast_search_more_handler");
            showMoreContainer.html(metaData.map((data, index) => {
                return `
                    <input type="radio" name='showmore_type' id="showmore_${index}">
                    <label for="showmore_${index}">
                        <span>Больше вариантов</span>
                        <img src="src/img/arrow_down_grey.png">
                    </label> 
                `
            }).join(''))
        }
        const addEvents = () => {
            const buttons = $(".fast_search_more_handler input");
            buttons.on('change', (e) => {
                const setDefault = () => {
                    const labels = $(`.fast_search_more_handler label`)
                    labels.html(
                        `
                            <span>Больше вариантов</span>
                            <img src="src/img/arrow_down_grey.png">
                        `
                    )
                    labels.removeClass('selected')
                }
                setDefault()
                if (e.target.checked) {
                    const label = $(`.fast_search_more_handler label[for="${e.target.id}"]`)
                    label.html(
                        `
                            <span>Скрыть</span>
                            <img src="src/img/arrow_down_white.png" style="transform: rotate(180deg); opacity: 0.5;">
                        `
                    )
                    label.addClass('selected')
                } 
                changeShowMore(e.target.id.match(/[0-9]/))
            })
        }
        getContent();
        addEvents()
    }
    getContainerContent()
    initRadioButtons()
    initShowMoreButtons()
}
export default createFastSearchContainer