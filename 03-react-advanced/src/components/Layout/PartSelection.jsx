import style from "./partSelection.module.css";

function OptionRender({ option, onClick }) {
  return (
    <div className={style["item-part"]}>
      <h2
        className={style["item-title"]}
        data-option={option}
        onClick={onClick}
      >{option.replace("-"," ")}</h2>
    </div>  
  );
};

function PartSelection({ options, componentSelected, setComponentSelected }) {

  function handlerClick({ currentTarget:{ dataset: { option } }, ...props}) {
    setComponentSelected(option);
  };

  return(
    <>
    <h2 className={style["part-selected"]}>Parte selected <span>{componentSelected}</span> </h2>
    <div className={style["container"]}>
      {options.map((item, index)=>(
        <OptionRender key={index} option={item} onClick={handlerClick} />
      ))}

    </div>
    </>
  );
};

export default PartSelection;