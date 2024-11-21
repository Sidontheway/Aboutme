import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./App.css"
import "./index.css"
const App = () => {

  const app = useRef(null);
  const tl = useRef()

  useEffect(() => {

    let ctx = gsap.context(() => {

      tl.current = gsap.timeline()
        .to(".square", { rotate: 360 })
        .to(".square2", { x: 200 });

    }, app);

    return () => ctx.revert()

  }, [])


   const message = ["Hello my name is SId","have you herd about it ?","Are you ok?"];

  return (
    <div ref={app}>
      <div className="square">Hello World</div>
      <div className="square2">Hello World 2</div>
	<p className = "comic-neue-bold-italic">Hello my name is Siddhartha tiwari.</p>
	  {
	     message.map(msg=><div  className = "comic-neue-regular-italic">
		     {msg}
		     </div>)
	  }

	  {
		  message.map(msg => <div className = "comic-neue-bold">
			  {msg}
		  </div>)
	  }

	  
    </div>


  )
}
export default App;
