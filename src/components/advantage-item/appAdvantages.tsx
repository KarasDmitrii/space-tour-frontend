import "./appAdvantages.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../index";


interface IAdvantageItem {
  heading: string;
  content: string;
  extra_content?: string;
  description: string;
}

function Andvantages() {

  const [advantageList, setAdvantageList] = useState<IAdvantageItem[] | []>([])

  const getAdvantageList = () => {
    axios.get<IAdvantageItem[]>(API_URL + 'advantages/').then(data => setAdvantageList(data.data))
  }

  useEffect(() => {
    getAdvantageList()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    document.documentElement.style.setProperty('--x', String(e.clientX) + 'px')
    document.documentElement.style.setProperty('--y', String(e.clientY) + 'px')
  };

  return (
    <div className="advantage__list d-grid" onMouseMove={handleMouseMove}>
      {
        advantageList.map((item, index) => {
          return (
            <div key={index} className="advantage__container justify-content-center align-items-center d-grid">
              <div className="advantage__wrapper text-center">
                <p className="advantage__heading body">{item.heading}</p>
                <div className="d-flex align-items-end justify-content-center">
                  <p className="advantage__content headline">{item.content}</p>
                  <p className="advantage__extra-content headline">{item.extra_content}</p>
                </div>
                <p className="advantage__description body">{item.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Andvantages;