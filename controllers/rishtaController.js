const Rishta = require("../models/Rishta");

// Import Validation
const { validatePhone } = require("../utils/validation");

exports.getRishtas = async (req, res) => {
  try {
    const rishtas = await Rishta.find();
    res.status(200).json(rishtas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRishta = async (req, res) => {
  try {
    const rishta = await Rishta.findById(req.params.id);
    res.status(200).json(rishta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createRishta = async (req, res) => {
  const {
    Dob,
    height,
    weight,
    cnic,
    phone,
    address,
    city,
    country,
    sect,
    image,
    caste,
    maritalStatus,
    education,
    profession,
    income,
    fatherName,
    fatherOccupation,
    motherName,
    motherOccupation,
    siblings,
    about,
    color,
  } = req.body;

  if (
    !Dob ||
    !height ||
    !weight ||
    !cnic ||
    !phone ||
    !address ||
    !city ||
    !country ||
    !sect ||
    !image ||
    !caste ||
    !maritalStatus ||
    !education ||
    !profession ||
    !income ||
    !fatherName ||
    !fatherOccupation ||
    !motherName ||
    !motherOccupation ||
    !siblings ||
    !about ||
    !color
  )
    return res.status(400).json({ msg: "Please fill all the fields." });

  const rishta = new Rishta({
    Dob,
    height,
    weight,
    cnic,
    phone,
    address,
    city,
    country,
    sect,
    image,
    caste,
    maritalStatus,
    education,
    profession,
    income,
    fatherName,
    fatherOccupation,
    motherName,
    motherOccupation,
    siblings,
    about,
    color,
  });

  try {
    const newRishta = await rishta.save();
    console.log(newRishta);
    res.status(201).json(newRishta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateRishta = async (req, res) => {
  try {
    const {
      Dob,
      height,
      weight,
      cnic,
      phone,
      address,
      city,
      country,
      sect,
      image,
      caste,
      maritalStatus,
      education,
      profession,
      income,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
      siblings,
      about,
      color,
    } = req.body;
    const rishta = await Rishta.findByIdAndUpdate(
      req.params.id,
      {
        Dob,
        height,
        weight,
        cnic,
        phone,
        address,
        city,
        country,
        sect,
        image,
        caste,
        maritalStatus,
        education,
        profession,
        income,
        fatherName,
        fatherOccupation,
        motherName,
        motherOccupation,
        siblings,
        about,
        color,
      },
      { new: true }
    );
    res.status(200).json(rishta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteRishta = async (req, res) => {
  try {
    await Rishta.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Rishta Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Find Rishta by City
exports.getRishtaByCity = async (req, res) => {
  const rishta = await Rishta.find({ city: req.params.city });
  res.status(200).json(rishta);
};

// Find Rishta by Sect
exports.getRishtaBySect = async (req, res) => {
  const rishta = await Rishta.find({ sect: req.params.sect });
  res.status(200).json(rishta);
};

// Find Rishta by Caste
exports.getRishtaByCaste = async (req, res) => {
  const rishta = await Rishta.find({ caste: req.params.caste });
  res.status(200).json(rishta);
};

// Find Rishta by Marital Status
exports.getRishtaByMaritalStatus = async (req, res) => {
  const rishta = await Rishta.find({ maritalStatus: req.params.maritalStatus });
  res.status(200).json(rishta);
};

// Find Rishta by Education
exports.getRishtaByEducation = async (req, res) => {
  const rishta = await Rishta.find({ education: req.params.education });
  res.status(200).json(rishta);
};

// Find Rishta by Profession
exports.getRishtaByProfession = async (req, res) => {
  const rishta = await Rishta.find({ profession: req.params.profession });
  res.status(200).json(rishta);
};

// Find Rishta by Income
exports.getRishtaByIncome = async (req, res) => {
  const rishta = await Rishta.find({ income: req.params.income });
  res.status(200).json(rishta);
};

// Find Rishta by Color
exports.getRishtaByColor = async (req, res) => {
  const rishta = await Rishta.find({ color: req.params.color });
  res.status(200).json(rishta);
};

// Find Rishta by Height
exports.getRishtaByHeight = async (req, res) => {
  const rishta = await Rishta.find({ height: req.params.height });
  res.status(200).json(rishta);
};

// Find Rishta by Weight
exports.getRishtaByWeight = async (req, res) => {
  const rishta = await Rishta.find({ weight: req.params.weight });
  res.status(200).json(rishta);
};

// Find Rishta by Country
exports.getRishtaByCountry = async (req, res) => {
  const rishta = await Rishta.find({ country: req.params.country });
  res.status(200).json(rishta);
};

// Find Rishta by Siblings
exports.getRishtaBySiblings = async (req, res) => {
  const rishta = await Rishta.find({ siblings: req.params.siblings });
  res.status(200).json(rishta);
};
