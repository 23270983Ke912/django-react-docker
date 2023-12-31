# Generated by Django 4.2.3 on 2023-09-06 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Summary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location_of_fire', models.CharField(max_length=255)),
                ('safe_to_leave', models.EmailField(max_length=255)),
                ('direction_and_speed', models.CharField(max_length=255)),
                ('firefighters_activity', models.CharField(max_length=255)),
                ('what_is_on_fire', models.CharField(max_length=255)),
                ('google_map', models.CharField(max_length=2550)),
            ],
        ),
    ]
