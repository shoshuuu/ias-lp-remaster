import * as React from "react";
import { Link } from "gatsby";

export const RequestDemoButton = (
  <div className="request-demo-button">
    <Link to="/sales" className="button-filled">
      Try now
    </Link>
    <Link to="sales" className="request-demo">
      Request demo
    </Link>
  </div>
);
