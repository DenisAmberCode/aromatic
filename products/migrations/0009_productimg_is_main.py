# Generated by Django 2.1 on 2019-08-15 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_product_short_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='productimg',
            name='is_main',
            field=models.BooleanField(default=False),
        ),
    ]
