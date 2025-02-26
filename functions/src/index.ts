import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {AppVisitors} from "./types";

// Initialize Firebase Admin
admin.initializeApp();

// Configuration for the HTTPS function
export const trackVisitor = functions.https.onRequest(async (req, res) => {
  try {
    // Get client IP from request headers or socket
    const headerip = (req.headers["x-forwarded-for"] as string);
    const ip = headerip || req.socket.remoteAddress;

    // Get appId from query parameter or body (you can choose how to pass it)
    const appId = req.query.appId as string || req.body.appId;

    if (!appId) {
      res.status(400).json({error: "appId is required"});
      return;
    }

    // Validate IP
    if (!ip) {
      res.status(400).json({error: "Unable to determine IP address"});
      return;
    }

    const db = admin.database();
    const visitorsRef = db.ref("uniqueVisitors");

    // Get current visitors data
    const snapshot = await visitorsRef.once("value");
    const allVisitors: AppVisitors = snapshot.val() || {};

    // Initialize visitors for this app if it doesn't exist
    if (!allVisitors[appId]) {
      allVisitors[appId] = {};
    }

    const appVisitors = allVisitors[appId];
    let uniqueCount: number;

    if (!appVisitors[ip]) {
      // New visitor for this app
      appVisitors[ip] = true;
      allVisitors[appId] = appVisitors;

      await visitorsRef.set(allVisitors);
      uniqueCount = Object.keys(appVisitors).length;
    } else {
      // Existing visitor
      uniqueCount = Object.keys(appVisitors).length;
    }

    // Send response
    res.status(200).json({
      appId,
      count: uniqueCount,
      status: "success",
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
});
