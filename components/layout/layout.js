import MainNavigation from './main-navigation';
import Notification from '../ui/notification';
import { useContext } from 'react';
import NotificationContext from '../../store/notification-context';

const Layout = ({ children }) => {
  const notificationCxt = useContext(NotificationContext);

  const activeNotification = notificationCxt.notification;

  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
