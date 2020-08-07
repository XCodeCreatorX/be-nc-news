// exports.PSQLerror = (err, req, res, next) => {
//   next(err)
// }

exports.customError = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};