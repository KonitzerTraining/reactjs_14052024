export function StartPage () {
    return (
        <>
            <h1>Willkommen</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt atque, hic aspernatur laborum optio molestias excepturi sint id tempore minima. Porro tempore repudiandae corporis reprehenderit laudantium sapiente fugit, numquam deserunt.</p>

            <JsxBasics></JsxBasics>
        </>
    )
}

function JsxBasics() {
    const title = 'CRM v1';
  
    const clickHandler = () => {
      console.log('ok');
    }
  
    return (
      <>
        <h2>{title}</h2>
        <p className="text">Hallo</p>
        <button onClick={clickHandler}>Click</button>
      </>
    )
  }