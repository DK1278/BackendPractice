// const asyncHandeler = () => {};

module.exports = asyncHandeler;

const asyncHandeler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
}; // explain this line below

// const asyncHandeler = () => {};  basic sentences
// const asyncHandeler = (func) => {() => {}} in parameters accepte function
// const asyncHandeler = (func) => async () => {} this line similar to above line this syntax is correct above syntax only explinetion and function call async function
