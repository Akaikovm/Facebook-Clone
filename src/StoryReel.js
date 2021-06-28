import React from "react";
import Story from "./Story.js";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
        profileSrc="https://avatars.githubusercontent.com/u/38089240?v=4"
        title="Sebastian Villamizar"
      />
      <Story
        image="https://bolavip.com/__export/1589388100643/sites/bolavip/img/2020/05/13/leagueoflegends_bardoastronauta_1_crop1589388099872.jpg_1187729725.jpg"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQEJY1fCJBnjKQ/profile-displayphoto-shrink_200_200/0/1537850743173?e=1628726400&v=beta&t=q1HYKMMIktN0zEWriSr43Ew6DraAFIAknMzQGIr8BGA"
        title="Andres Giusti"
      />
      <Story
        image="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5MDg2MDE0MzkwODA1NTQ5/san-francisco-giants-mike-yastrzemski.jpg"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQE5AYhsOgnB_w/profile-displayphoto-shrink_200_200/0/1565639102562?e=1628726400&v=beta&t=60WZbnI8Qf-DzoaXXPhzSUfA3U8h4TQA146LgxA0JkM"
        title="Carlos Giusti"
      />
      <Story
        image="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/09/chikorita.jpg?itok=F5hBiGO9"
        profileSrc="https://scontent.fuio7-1.fna.fbcdn.net/v/t31.18172-8/1836910_10205924870425445_386417143827781434_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ho8zwauLuPMAX8rVe65&_nc_oc=AQmZGSaNzc0SYDZCWnJlbj7-q1XvQgdC8tZ2rwQMj-qXuZMe3zgrcnkznEV-zsK3RCE&_nc_ht=scontent.fuio7-1.fna&oh=3e09c258f092c69aea2456ac03f73eae&oe=60E23E4C"
        title="Angel Martin"
      />
      <Story
        image="https://thumbs.dreamstime.com/z/hamburguesa-triple-53199653.jpg"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQH_Xd54HPtQ3g/profile-displayphoto-shrink_200_200/0/1517863964272?e=1628726400&v=beta&t=flsBUfIV2lMIRQEu-I-JoreTdg_KgpA1KWF9uQLolPk"
        title="Reinaldo Mendoza"
      />
    </div>
  );
}

export default StoryReel;
