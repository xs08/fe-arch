import { useEffect } from 'react';

import { useAppType, useUserLogged } from '@DataHooks/state/rootState.hooks';
import { useAppDispatch } from '@Redux/store';
import { ActionUpdateUserLogged } from '@Actions/state/rootState.action';

import yayJpg from '@Assets/yay.jpg';

export default function HomePage() {
  const appType = useAppType();
  const userLogged = useUserLogged();

  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(ActionUpdateUserLogged(true));
    }, 5000);
  }, []);

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <p>just some test;</p>
      <p> 当前设备类型是: {appType} </p>
      <p> 当前用户是否登录: {`${userLogged}`} </p>
    </div>
  );
}
