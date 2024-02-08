import { useEffect, useState } from 'react';
import AchieveCanva from './AchieveCanva';

function AchieveTabs({achieves, roles, canva}) {
  const [tab, setTab] = useState([])
  const [chosenRole, setChosenRole] = useState('all')

  useEffect(() => {setTab(achieves)}, [achieves])

  const changeTab = (role) => {
    setChosenRole(role)
    if (role === 'all') return setTab(achieves)
    const arr = achieves.filter(achieve => achieve.role === role || achieve.role.includes(role))
    setTab(arr)
  }

  return (
    <div className="mb-3 d-flex flex-column">
      <div className='tab-bar d-flex align-self-center flex-wrap justify-content-around card-bg p-3 mb-4'>
          <div className={chosenRole === 'all' ? 'tab-active px-2 mb-2' : 'px-2 mb-2'} onClick={() => changeTab('all')}>
            <span>Все</span>
          </div>
        {roles.map(role =>
          <div className={chosenRole === role ? 'tab-active px-2 mb-2' : 'px-2 mb-2'} onClick={() => changeTab(role)} key={role}>
            <span>{role}</span>
          </div>
        )}
      </div>
      <div className='d-flex flex-wrap mx-3 f-300' >
        {tab.map(achieve =>
          <div key={achieve.id}>
            <AchieveCanva achieve={achieve} canva={canva}>
              <div>
                <h1 className='me-2 heading-font'>{achieve.brand}.</h1>
              </div>
            </AchieveCanva> 
          </div>
        )}
      </div>       
    </div>
  );
}

export default AchieveTabs;