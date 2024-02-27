const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  user: prisma.user,
  profile: prisma.profile,
  review: prisma.review,
  rating: prisma.rating,
  notification: prisma.notification,
  profileDoctor: prisma.profileDoctor,
  practice: prisma.practice,
  hospital: prisma.hospital,
  practiceOnDoctor: prisma.practiceOnDoctor,
  hospitalOnDoctor: prisma.hospitalOnDoctor,
};
