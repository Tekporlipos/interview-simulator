import React, { useEffect, useState } from "react";
import "./style.css";
import { useSpring, animated } from "@react-spring/web";

function QuestionCardComponent(prop: any) {
  const [show, setShow] = useState(false);
  const fade = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: show ? 1 : 0,
    },
  });

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShow(true);
    }, prop.timeout * 500);

    // Cleanup the timeout to prevent potential issues
    return () => {
      clearTimeout(animationTimeout);
    };
  }, [prop.timeout]);

  return (
    <animated.div
      style={fade}
      onClick={() => prop.sendMessage(prop.answer)}
      className="col-lg-4 col-md-6 col-sm-12 a"
    >
      <div className="flex-column text-white bg-dark p-3 rounded-2 mb-4  q-card">
        <div className="font-weight-300 pb-2">{prop.question}</div>
        <div className="font-weight-200 alpha-5">{prop.answer}</div>
      </div>
    </animated.div>
  );
}

export default React.memo(QuestionCardComponent);
