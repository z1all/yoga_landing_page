// import fetchMock, {MockRequest} from 'fetch-mock';
import {useMock} from "../../react-app-env";
import {IDirection, weekday} from "../../types/types";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

if (useMock) {

    const mock = new MockAdapter(axios);

    const directionsList : IDirection[] = [
        {
            name: "Кундалини-йога",
            description: "Сочетает довольно интенсивные упражнения, специальную дыхательную практику, повторяющиеся асаны.\n\n" +
                "Помогает увеличить уровень энергии и силы, снять напряжение и стресс, улучшить физическую выносливость, концентрацию, стимулировать творческий потенциал и привнести глубокий внутренний покой.\n\n" +
                "Кундалини-йога доступна людям любого возраста и физической подготовки.",
            durationMinutes: 60,
            weekdays: [weekday.Monday, weekday.Wednesday, weekday.Friday],
            imageUrl: "women-doing-yoga-cleaning-chakra (3).png",
        },
        {
            name: "Хатха-йога",
            description: "Это классическое направление йоги, которое включает в себя асаны для укрепления мышц, дыхательные упражнения и медитацию.\n\n" +
                "Регулярные занятия помогают подтянуть тело, улучши гибкость, укрепить здоровье, придав телу силу и выносливость, а также обрести душевное равновесие.",
            durationMinutes: 60,
            weekdays: [weekday.Monday, weekday.Wednesday, weekday.Friday],
            imageUrl: "women-doing-yoga-cleaning-chakra (1).png",
        },
        {
            name: "Пилатес",
            description: "Основан на принципе баланса и координации, нацелен на укрепление мышц, улучшение гибкости, состоит из плавных и бережных движений.\n\n" +
                "Пилатес работает не только с крупными, но и с мелкими мышцами, которые часто остаются незадействованными при стандартных  упражнениях.\n\n" +
                "Подходит для людей всех возрастов и уровней физической подготовки, включая беременных женщин и пожилых людей.",
            durationMinutes: 60,
            weekdays: [weekday.Monday, weekday.Wednesday, weekday.Friday],
            imageUrl: "woman-doing-yoga-cleaning-chakra.png",
        },
        {
            name: "Здоровая спина",
            description: "Занятия ориентированы на гармоничное развитие тела. Регулярное выполнение упражнений формирует мышечный корсет, удерживающий позвоночник. \n\n" +
                "Способствует улучшению осанки, координации движений, снижению веса благодаря нормализации лимфотока. Снимается психоэмоциональное напряжение.",
            durationMinutes: 60,
            weekdays: [weekday.Monday, weekday.Wednesday, weekday.Friday],
            imageUrl: "woman-digital-disconnecting-home-by-doing-yoga.png",
        },
        {
            name: "Флоу-йога",
            description: "Сочетает в себе элементы различных стилей йоги, позволяет быстро достичь гармонии тела и духа.\n\n" +
                "Занятия йогой построены на принципах напряжения, расслабления и дыхания.  Дыхательные практики способствуют улучшению кровообращения и нормализации давления. ",
            durationMinutes: 60,
            weekdays: [weekday.Monday, weekday.Wednesday, weekday.Friday],
            imageUrl: "woman-doing-yoga-for-cleaning-chakra (1).png",
        },
        {
            name: "Стретчинг",
            description: "Стрейч, растяжка  поможет снять напряжение, приобрести легкость и свободу тела. Состоит из плавных движений, которые рассчитаны на удлинение и растяжку мышц.\n\n" +
                "Стретчинг помогает улучшить гибкость тела, укрепить мышцы, улучшить подвижность суставов и снизить риск получения травм.",
            durationMinutes: 60,
            weekdays: [weekday.Monday, weekday.Wednesday, weekday.Friday],
            imageUrl: "women-doing-yoga-cleaning-chakra.png",
        },
    ];

    mock.onGet('/api/directions').reply(200, {directionsList});

}