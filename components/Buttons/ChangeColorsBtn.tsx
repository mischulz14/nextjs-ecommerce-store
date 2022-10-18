const ChangeColorsBtn = (props: any) => {
  return (
    <>
      <button
        onClick={() => {
          props.matchedProduct.activePicture =
            props.matchedProduct.firstPicture;
          props.setRendered((prev: boolean) => !prev);
        }}
        className="w-8 h-8 bg-white border-2 rounded-full border-slate-400"
      />
      <button
        onClick={() => {
          props.matchedProduct.activePicture =
            props.matchedProduct.secondPicture;
          props.setRendered((prev: boolean) => !prev);
        }}
        className="w-8 h-8 border-2 rounded-full border-slate-400"
        style={{
          backgroundColor: props.matchedProduct.secondColor,
        }}
      />
    </>
  );
};

export default ChangeColorsBtn;

// CHANGE COLORS ALTERNATIVE FOR LATER

// eslint-disable-next-line no-lone-blocks
{
  /* <button
                    onClick={() => {
                      addCookie('count', product);
                      productContext.setChosenProducts((prev: any) => {
                        const found = prev.find(
                          (item: any) => item.id === product.id,
                        );
                        if (found) {
                          found.activePicture = product.firstPicture;
                          return [...prev];
                        }
                        return [...prev, product];
                      });
                    }}
                    className="w-6 h-6 bg-white border-2 rounded-full border-slate-400"
                  />
                  <button
                    onClick={() => {
                      addCookie('count', product);
                      productContext.setChosenProducts((prev: any) => {
                        const found = prev.find(
                          (item: any) => item.id === product.id,
                        );
                        if (found) {
                          found.activePicture = product.secondPicture;
                          return [...prev];
                        }
                        return [...prev, product];
                      });
                    }}
                    className="w-6 h-6 border-2 rounded-full border-slate-400"
                    style={{ backgroundColor: product.secondColor }}
                  /> */
}
