//npm run dev
const TelegramApi = require('node-telegram-bot-api')
const AdminChatId = ''


const token = '' //токен telegram

const bot = new TelegramApi(token, { polling: true })

const chats = {}
const startOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Пройти опрос', callback_data: '/first' }],
        ]
    })
}


const One = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Геленджик', callback_data: '/one1' }],
            [{ text: 'Крым', callback_data: '/one2' }],
            [{ text: 'Сочи', callback_data: '/one3' }],
        ]
    })
}

const Two = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Галька', callback_data: '/two1' }],
            [{ text: 'Песок', callback_data: '/two2' }],
        ]
    })
}

const Three = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '50.000руб', callback_data: '/three1' }],
            [{ text: '100.000руб', callback_data: '/three2' }],
            [{ text: '150.000руб', callback_data: '/three3' }],
            [{ text: '200.000руб', callback_data: '/three4' }],
        ]
    })
}



const start = async () => {


    bot.setMyCommands([ // Меню предложенное пользователю
        { command: '/start', description: 'Начальное приветствие' },
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        try { // Делаем в try что бы ошибка выводилась в консоль
            if (text === "/start") {
                return bot.sendMessage(chatId, `${msg.from.first_name}, Добро пожаловать в телеграмм бота! Здесь вы можете пройти опрос!`, startOptions)

            }

            return bot.sendMessage(chatId, 'Я тебя не понимаю попробуй еще раз!)') // Сообщение если написана команда которой нет в коде
        } catch (e) { //  Вывод ошибки в консоль
            return bot.sendMessage(chatId, 'Произошла какая, то ошибочка!')
        }



    })

    let tempCallbacks = {};

    bot.on('callback_query', async msg => {
        const data = msg.data; // Получаем цифру
        const chatId = msg.message.chat.id;
        const first_name = msg.from.first_name;
        if (!tempCallbacks.hasOwnProperty(msg.from.id)) {
            tempCallbacks[msg.from.id] = {
                user: first_name,
                ot1: '',
                ot4: '',
                ot6: ''
            };
        };

        console.log('tempCallbacks - ', tempCallbacks)
        if (data === '/first') {
            await bot.sendMessage(chatId, `Первый вопрос! Куда бы вы хотели съездить этим летом на отдых?`, One);
        }


        if (data === '/one1') {
            await bot.sendMessage(chatId, `Второй вопрос! Какой пляж вам больше нравится?`, Two);
            tempCallbacks[msg.from.id].ot1 = 'Геленджик'
        }
        if (data === '/one2') {
            await bot.sendMessage(chatId, `Второй вопрос! Какой пляж вам больше нравится?`, Two);
            tempCallbacks[msg.from.id].ot1 = 'Крым'

        }
        if (data === '/one3') {
            await bot.sendMessage(chatId, `Второй вопрос! Какой пляж вам больше нравится?`, Two);
            tempCallbacks[msg.from.id].ot1 = 'Сочи'
        }


        if (data === '/two1') {
            await bot.sendMessage(chatId, `Третий вопрос! Кокой бюджет у вас на путешествие?`, Three);
            tempCallbacks[msg.from.id].ot4 = 'Галька'
        }
        if (data === '/two2') {
            await bot.sendMessage(chatId, `Третий вопрос! Кокой бюджет у вас на путешествие?`, Three);
            tempCallbacks[msg.from.id].ot4 = 'Песок'
        }


        if (data === '/three1') {
            await bot.sendMessage(chatId, `Большое спасибо, что проголосовали в нашем опросе!`);
            tempCallbacks[msg.from.id].ot6 = '50.000руб'
            let user = chatId
            let username = tempCallbacks[user]['user']
            let answerOne = tempCallbacks[user]['ot1']
            let answerTwo = tempCallbacks[user]['ot4']
            let answerThree = '50.000руб'
            let message = `Пользователь ${username}, прислал ответы: ${answerOne} - ${answerTwo} - ${answerThree}`
            delete tempCallbacks[msg.from.id]
            console.log(tempCallbacks)
             await bot.sendMessage(AdminChatId, message);
        }

        if (data === '/three2') {
            await bot.sendMessage(chatId, `Большое спасибо, что проголосовали в нашем опросе!`);
            tempCallbacks[msg.from.id].ot6 = '100.000руб'
            let user = chatId
            let username = tempCallbacks[user]['user']
            let answerOne = tempCallbacks[user]['ot1']
            let answerTwo = tempCallbacks[user]['ot4']
            let answerThree = '100.000руб'
            let message = `Пользователь ${username}, прислал ответы: ${answerOne} - ${answerTwo} - ${answerThree}`
            delete tempCallbacks[msg.from.id]
            console.log(tempCallbacks)
             await bot.sendMessage(AdminChatId, message);
        }

        if (data === '/three3') {
            await bot.sendMessage(chatId, `Большое спасибо, что проголосовали в нашем опросе!`);
            tempCallbacks[msg.from.id].ot6 = '150.000руб'
            let user = chatId
            let username = tempCallbacks[user]['user']
            let answerOne = tempCallbacks[user]['ot1']
            let answerTwo = tempCallbacks[user]['ot4']
            let answerThree = '150.000руб'
            let message = `Пользователь ${username}, прислал ответы: ${answerOne} - ${answerTwo} - ${answerThree}`
            delete tempCallbacks[msg.from.id]
            console.log(tempCallbacks)
             await bot.sendMessage(AdminChatId, message);
        }

        if (data === '/three4') {
            await bot.sendMessage(chatId, `Большое спасибо, что проголосовали в нашем опросе!`);
            tempCallbacks[msg.from.id].ot6 = '200.000руб'
            let user = chatId
            let username = tempCallbacks[user]['user']
            let answerOne = tempCallbacks[user]['ot1']
            let answerTwo = tempCallbacks[user]['ot4']
            let answerThree = '200.000руб'
            let message = `Пользователь ${username}, прислал ответы: ${answerOne} - ${answerTwo} - ${answerThree}`
            delete tempCallbacks[msg.from.id]
            console.log(tempCallbacks)
             await bot.sendMessage(AdminChatId, message);
        }
    }



    )
}


start()
