import { Outlet } from "react-router-dom";
import styles from './OutletContainer.module.css';

function OutletContainer() {
  return (
    <div className={styles.outletContainer}>
      <Outlet />
    </div>
  );
}

export default OutletContainer;