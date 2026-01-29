---
title: "Company-PC-Site-Restrict"
description: "How Companies Restrict Access to Certain Websites"
tags:
  - websites
---

## How Companies Restrict Access to Certain Websites

> Tor can bypass DNS filtering and forward proxies, but most modern corporate firewalls will detect and block Tor traffic — or flag it as suspicious. It’s not a reliable or risk-free workaround in monitored environments.
> - Tor is not invisible — the fact you're using Tor can still be detected, even if the content is encrypted.

### 1. **Forward Proxy (Most Common)**

A **forward proxy** sits between the user's computer and the internet. It intercepts web traffic and can **allow or deny** requests based on rules.

**What It Can Do:**

* **Block specific domains** (e.g., `facebook.com`)
* **Allow only whitelisted domains**
* **Monitor user activity**
* Enforce filtering policies (e.g., by content category: social media, gambling, etc.)

**Example:**

If you try to open `https://youtube.com`, the request is sent to the forward proxy. The proxy checks its rules and **denies the request** if YouTube is blacklisted.

### 2. **DNS Filtering / Domain Restrictions**

Another layer is **DNS-based filtering**.

Here, the company's DNS server is configured to:

* Block name resolution for certain domains
* Return a fake or blocked IP address for forbidden sites

### 3. **Local Browser or Firewall Rules (Less Common)**

* The company may use **group policies** (GPO) on Windows to configure the browser to block certain sites.
* Firewalls (like Palo Alto, Fortinet) may also block traffic at the **network level**.

##  What's Actually Stopping Access?

| Method                | Who Controls It       | Can Block Specific Domains? | Monitors Traffic?          |
| --------------------- | --------------------- | --------------------------- | -------------------------- |
| ✅ **Forward Proxy**   | Network/Security Team | ✔ Yes                       | ✔ Yes                      |
| ✅ **DNS Filtering**   | DNS Server/Admin      | ✔ Yes                       | ✖ (only blocks resolution) |
| ⚙️ **Local Policies** | IT Department         | ✔ Yes                       | ✖ (depends)                |
| 🔥 **Firewall Rules** | Network Firewall      | ✔ Yes                       | ✔ Yes (deep inspection)    |

**✅ Best Practice in Companies:**

They often use **a combination of a forward proxy + DNS filtering + firewall rules** to secure and control employee access.
