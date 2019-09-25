---
layout: layouts/blog.njk
title: blogPost1Title
description: blogPost1Title
permalink: "blog-{{ 'blogPost1Title' | i18n | slug | link }}"
tags:
  - blog
  - learning
  - living
date: 2018-01-01
templateEngineOverride: njk, md
---

{% set locale = 'locale' | i18n %}

{% if locale === 'en' %}

# This is typical english

Some english text...

{% endif %}

{% if locale === 'de' %}

# Das ist typisch deutsch

Etwas Text auf deutsch...

{% endif %}
